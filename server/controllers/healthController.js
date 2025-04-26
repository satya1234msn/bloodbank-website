const Health = require('../models/health');

const submitHealth = async (req, res) => {
  try {
    const healthData = await Health.create(req.body);
    res.status(201).json(healthData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { submitHealth };
