const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: String,
  bloodType: String,
  location: String,
  contact: String,
  reason: String,
  urgent: {
    type: Boolean,
    default: false
  },
  
  email: { type: String, required: true }  // Add email field
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
