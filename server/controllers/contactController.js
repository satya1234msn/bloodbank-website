const Contact = require('../models/contact');

const submitContact = async (req, res) => {
  try {
    const message = await Contact.create(req.body);
    res.status(201).json({ message: 'Thank you for contacting us!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { submitContact };
