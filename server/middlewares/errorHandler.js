const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode).json({
    message: err.message,
    errors: err.errors,
  });
};

module.exports = errorHandler;
