const Alert = require('../models/alert');

const subscribeAlert = async (req, res) => {
  try {
    const alert = await Alert.create(req.body);
    res.status(201).json({ message: 'Subscribed to alerts!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { subscribeAlert };
