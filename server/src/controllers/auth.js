// require necessary modules
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

// require model
const { Doctor } = require('../models');

// register controller
async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const doctor = await Doctor.create({
      name,
      email,
      password
    });

    const token = jwt.sign(
      { id: doctor._id, name: doctor.name },
      process.env.SECRET_KEY,
      // 24h
      { expiresIn: 86400 }
    );

    return res.status(StatusCodes.CREATED).json({ token });
  } catch (err) {
    console.log({ err });

    if (err.code === 11000) {
      err.messages = 'Email is already taken!';
    }

    return next({
      status: StatusCodes.FORBIDDEN,
      messages: err.messages
    });
  }
}

// login controller
async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });

    if (doctor == null) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        status: res.statusCode,
        messages: 'Invalid credentials provided!'
      });
    }

    const isMatch = await doctor.passwordAuth(password);

    if (isMatch) {
      const token = jwt.sign(
        { id: doctor._id, name: doctor.name },
        process.env.SECRET_KEY,
        // 15min
        { expiresIn: 21600 }
      );
      return res.status(StatusCodes.OK).json({ token });
    }

    return next({
      status: StatusCodes.UNAUTHORIZED,
      messages: 'Invalid credentials provided!'
    });
  } catch (err) {
    return next({
      status: StatusCodes.FORBIDDEN,
      messages: err.messages
    });
  }
}

// export auth controllers
module.exports = {
  register,
  login
};
