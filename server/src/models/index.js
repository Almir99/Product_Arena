// require necessary module
const { connectDB } = require('../config/db');

// connect to mongodb database
connectDB()
  .then(() => console.log('Connected to Atlas DB!'))
  .catch((error) => console.log(error));

// require models and export them
module.exports.Disease = require('./Disease');
module.exports.Patient = require('./Patient');
module.exports.Doctor = require('./Doctor');
