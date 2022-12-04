// require necessary module
const { StatusCodes } = require('http-status-codes');

// require model
const { Disease } = require('../models');

// create disease controller
async function createDisease(req, res, next) {
  try {
    const { name, img } = req.body;
    const patient = await Disease.create({ name, img });

    return res.status(StatusCodes.OK).json({ patient });
  } catch (err) {
    return next({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      messages: err.messages
    });
  }
}

// get diseases controller
async function getDiseases(req, res, next) {
  try {
    const disease = await Disease.find();

    return res.status(StatusCodes.OK).json({
      count: disease.length,
      results: disease
    });
  } catch (err) {
    return next({
      status: StatusCodes.FORBIDDEN,
      messages: err.messages
    });
  }
}

// export patient controllers
module.exports = {
  createDisease,
  getDiseases
};
