const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  bloodPressure: String,
  heartRate: Number,
  weight: Number,
  temperature: Number,
  bloodSugar: Number
}, { timestamps: true });

module.exports = mongoose.model('Health', healthSchema);
