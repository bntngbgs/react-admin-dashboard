const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (err.name === 'CastError') {
    err.message = 'Invalid MongoDB ObjectID';
  }

  if (err.name === 'TokenExpiredError') {
    err.statusCode = 403;
    err.message = 'Token expired. Please refresh your token.';
  }

  if (err.name === 'JsonWebTokenError') {
    err.statusCode = 403;
    err.message = 'Invalid token. Please log in again.';
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message, fields: err.errors });
  }

  res.status(err.statusCode).json({ message: err.message });
};

export default errorHandler;
