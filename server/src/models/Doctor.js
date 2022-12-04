// require necessary modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Mongoose schema

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 50
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: 6
  }
});

// define pre hook for password hashing
DoctorSchema.pre('save', async function passwordHashing(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }

    this.password = await bcrypt.hash(this.password, 10);

    return next();
  } catch (err) {
    return next(err);
  }
});

// define pre hook for password change hashing
DoctorSchema.pre('updateOne', async function changePassword(next) {
  try {
    const updateOne = this.getUpdate();
    if (!updateOne.password) {
      return next();
    }

    updateOne.password = await bcrypt.hash(updateOne.password, 10);

    return next();
  } catch (err) {
    return next(err);
  }
});

// define static method for user's authentication
DoctorSchema.methods.passwordAuth = async function userAuth(password, next) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    return next(err);
  }
};

// define static method for JSON response
DoctorSchema.methods.toJSON = function userToJSON() {
  const user = this.toObject();
  delete user.password;
  delete user.__v;
  return user;
};

// // define mongoose model
const Doctor = mongoose.model('Doctor', DoctorSchema);

// // export Doctor model
module.exports = Doctor;
