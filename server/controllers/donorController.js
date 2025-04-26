const Donor = require('../models/donor');

// Create a new donor
const createDonor = async (req, res) => {
  try {
    const donor = await Donor.create(req.body);
    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all donors
const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search donors by blood type and location
const searchDonors = async (req, res) => {
  const { bloodType, location } = req.query;

  try {
    const results = await Donor.find({
      bloodType: bloodType.trim(), // exact match
      location: { $regex: new RegExp(location.trim(), 'i') } // case-insensitive
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { createDonor, getDonors, searchDonors };
