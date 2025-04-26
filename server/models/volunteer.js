const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  volunteerSkills: String,
  availability: String
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', volunteerSchema);
