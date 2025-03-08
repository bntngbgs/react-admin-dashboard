const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (err.name === 'TokenExpiredError') {
    err.statusCode = 403;
    err.message = 'Token expired. Please refresh your token.';
  } else if (err.name === 'JsonWebTokenError') {
    err.statusCode = 401;
    err.message = 'Invalid token. Please log in again.';
  }

  res.status(err.statusCode).json({ message: err.message });
};

export default errorHandler;
