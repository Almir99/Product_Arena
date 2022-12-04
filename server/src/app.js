// require envs
require('dotenv').config();

// require necessary modules
const path = require('path');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

// require routes
const { authRoutes, patientRoutes, diseaseRoutes } = require('./routes');

// require error handler
const errorHandler = require('./middleware/errorHandler');

// initialize express app
const app = express();

// require db and models
require('./models');

// configure express app
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// use static files serving
app.use('/avatars', express.static(path.join(__dirname, './public/storage/icons')));

// use routes
app.use('/', authRoutes);
app.use('/patients', patientRoutes);
app.use('/diseases', diseaseRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

// pass any unhandled errors to the error handler
app.use(errorHandler);

// export express app
module.exports = app;
