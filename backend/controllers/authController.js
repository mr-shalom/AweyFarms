import jwt from "jsonwebtoken";
import { promisify } from "util";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "./../models/usersModel.js";
import catchAsyncErrors from "../utils/catchAsyncErrors.js";
import sendEmail from "../utils/sendEmail.js";

const signToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signUp = catchAsyncErrors(async function (req, res, next) {
  // const user = await User.create(req.body);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  if (!user) {
    return next(new ErrorHandler("Input fields must not be blank"));
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
    user,
  });
});

export const login = catchAsyncErrors(async function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Wrong email or password"), 400);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return new ErrorHandler("Username or password is invalid", 401);
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
    user,
  });
});

export const protectedRoute = catchAsyncErrors(async function (req, res, next) {
  //check for token in the headers
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new ErrorHandler(
        "You are not authorized to make this request, please, log in"
      )
    );
  }
  //verify if token is still valid
  let verifyToken = promisify(jwt.verify);
  const decodedJWT = await verifyToken(token, process.env.JWT_SECRET);
  //verify if user has an account or is signed or logged in
  const verifyUser = await User.findById(decodedJWT.id);
  if (!verifyUser) {
    return next(
      new ErrorHandler(
        "Account with this token, does not exist on the database",
        401
      )
    );
  }

  //verify if the user changed his password on or after being issued a token
  if (verifyUser.isPasswordChangedAfter(decodedJWT.iat)) {
    return next(
      new ErrorHandler(
        "Account password was changed of recent, pleaase log in again"
      )
    );
  }

  req.user = verifyUser;
  next();
});

export const restrictAccessTo = function (...roles) {
  return catchAsyncErrors(async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          "You do not have the right to perform this action",
          403
        )
      );
    }
    next();
  });
};

export const forgotPassword = catchAsyncErrors(async function (req, res, next) {
  if (!req.body || !req.body?.email) {
    return next(new ErrorHandler("Email field cannot be blank", 400));
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(
      new ErrorHandler(
        "Email not connected to any account on the database",
        403
      )
    );
  }

  const resetToken = user.generatePasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const passwordResetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetpassword/${resetToken}`;

  const passwordResetMessage = `Forgot your password?, Submit a request with your new password and passwordConfirm to: ${resetPasswordURL}.\n Please ignore this email, if you didn't forget your password.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Your password reset token will expire in 10 minutes`,
      message: passwordResetMessage,
      URL: passwordResetUrl,
    });

    res.status(200).json({
      status: "success",
      message: "passoword reset link sent to email",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler("Unable to send email", 500));
  }
});

//prettier-ignore
export const resetPassword = catchAsyncErrors(async function (req, res, next) {});
