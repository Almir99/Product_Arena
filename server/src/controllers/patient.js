// require necessary module
const { StatusCodes } = require('http-status-codes');

// require model
const { Patient } = require('../models');

// require util
const { isToday } = require('../utils/date');

// create patient controller
async function createPatient(req, res, next) {
  try {
    const { name, appointment, diagnosis, doctor } = req.body;
    const patient = await Patient.create({ name, appointment, diagnosis, doctor });

    return res.status(StatusCodes.OK).json({ patient });
  } catch (err) {
    console.log({ err });
    return next({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      messages: err.messages
    });
  }
}

// get patients controller query [?date=2022-12-04T10:11:06.969Z, ?doctorId=]
async function getPatients(req, res, next) {
  try {
    const { date, doctorId } = req.query;

    const patients = await Patient.find({ doctor: doctorId });

    if (date) {
      const newPatients = [];

      patients.forEach((patient) => {
        if (isToday(patient.appointment, date)) {
          newPatients.push(patient);
        }
      });

      return res.status(StatusCodes.OK).json({
        count: newPatients.length,
        results: newPatients
      });
    }

    return res.status(StatusCodes.OK).json({
      count: patients.length,
      results: patients
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
  createPatient,
  getPatients
};
