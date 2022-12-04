// require necessary modules
const mongoose = require('mongoose');
const validator = require('validator');

// Mongoose schema
const DiseaseSchema = new mongoose.Schema({
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
});

// define mongoose model
const Disease = mongoose.model('Disease', DiseaseSchema);

// export Doctor model
module.exports = Disease;
