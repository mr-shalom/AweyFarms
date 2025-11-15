const sendDevError = function (error, res) {
  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    errorStack: error.stack,
    error,
  });
};

const sendProdError = function (error, res) {
  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
};

const globalErrorController = (error, req, res, next) => {
  error.status = error.status || "fail";
  error.statusCode = error.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    sendDevError(error, res);
  } else if (process.env.NODE_ENV === "production") {
    sendProdError(error, res);
  }
};

export default globalErrorController;
