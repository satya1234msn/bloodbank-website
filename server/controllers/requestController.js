const Request = require('../models/Request'); // Assuming Request is the model for the blood requests

const createRequest = async (req, res) => {
  try {
    let { name, bloodType, location, contact, reason, urgent, email } = req.body;

    // ✅ convert string to boolean (server-side double check)
    urgent = urgent === true || urgent === 'true';

    const newRequest = new Request({
      name,
      bloodType,
      location,
      contact,
      reason,
      urgent,
      email
    });

    await newRequest.save();
    res.status(201).json({ message: 'Blood request submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while submitting request.' });
  }
};



// Get all blood requests
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserRequests = async (req, res) => {
  const email = req.params.email;
  try {
    const requests = await Request.find({ email }); // ✅ Match by email
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user requests' });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Request.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json({ message: 'Request deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during deletion' });
  }
};


module.exports = {
  createRequest,
  getAllRequests,
  getUserRequests,
  deleteRequest
};
