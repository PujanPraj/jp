// not found
export const notFound = (req, res, next) => {
  const error = new Error(`Page not found : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// error handler
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    success: false,
    message: err?.message,
    statck: err?.stack,
  });
};
