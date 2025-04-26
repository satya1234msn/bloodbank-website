const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  email: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Alert', alertSchema);
