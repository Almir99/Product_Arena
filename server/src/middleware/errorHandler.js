const createError = require('http-errors');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  console.log({ err });
  // if the error is safe to expose to client
  if (err.messages) {
    res.status(err.status || 500).send(err);
  } else {
    res.status(500).send(createError.InternalServerError());
  }
};

module.exports = errorHandler;
