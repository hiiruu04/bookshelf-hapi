class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
    this.name = 'ValidationError';
  }
}

module.exports = ValidationError;
