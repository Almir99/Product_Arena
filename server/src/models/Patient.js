// require necessary modules
const mongoose = require('mongoose');
const validator = require('validator');

// Mongoose schema
const PatientSchema = new mongoose.Schema(
  {
    avatar: String,
    name: {
      type: String,
      required: [true, 'Name is required!'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters long!'],
      maxlength: [50, 'Maximum characters allowed is 50!'],
      validate(val) {
        if (!validator.matches(val, /^[a-z\u0161\u0111\u010D\u0107\u017E ]*$/gim)) {
          throw new Error('Name must contain alphabetic characters!');
        }
      }
    },
    appointment: {
      type: Date,
      required: true,
      trim: true,
      validate(date) {
        if (!new Date(date) >= new Date()) {
          throw new Error(`${date} must be greater than or equal to the current date!`);
        }
      }
    },
    diagnosis: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Disease',
      required: true
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
    }
  },
  { timestamps: true }
);

// define mongoose model
const Patient = mongoose.model('Patient', PatientSchema);

// export Patient model
module.exports = Patient;
