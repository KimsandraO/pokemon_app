class ErrorResponse extends Error {
  constructor(error) {
    const {
      message = "Something went wrong",
      errors = null,
      statusCode = 500,
    } = error;
    super(message);
    this.errors = errors;
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
