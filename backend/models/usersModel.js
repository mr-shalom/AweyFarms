import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be a string"],
  },
  email: {
    type: String,
    required: [true, "Email must be a string"],
    validate: [validator.isEmail, "Invalid email format"],
    unique: true,
    lowercase: true,
  },
  photo: String,
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "user",
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, "Password must be at least 8 characters long"],
    select: false,
  },
  confirmPassword: {
    type: String,
    minlength: 8,
    required: [true, "confirmpassword field must be filled"],
    validate: {
      validator: function (confirmpassword) {
        return confirmpassword === this.password;
      },
      message: "Passwords do not match",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetTokenExpires: Date,
});

//signup: encypt userpassword against hackers
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

//login check: if curr user password === stored password on DB
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//protected route: check if password was changed after JWT was assigned to user acct
userSchema.methods.isPasswordChangedAfter = function (jwtDateIssued) {
  if (this.passwordChangedAt) {
    const passwordTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtDateIssued < passwordTimeStamp;
  }
  return false;
};

//forgot password: generate resetToken
userSchema.methods.generatePasswordResetToken = function () {
  //generate token
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

//

export const User = mongoose.model("User", userSchema);
