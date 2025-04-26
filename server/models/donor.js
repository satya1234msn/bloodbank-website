const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  bloodType: String,
  location: String,
  phone: String,
  healthHistory: String,
}, { timestamps: true });

module.exports = mongoose.model('Donor', donorSchema);
