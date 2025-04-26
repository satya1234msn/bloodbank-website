const User = require('../models/user');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  try {
    const { fullName, email, password, bloodType, location } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ fullName, email, password: hashedPassword, bloodType, location });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        fullName: user.fullName,
        email: user.email,
        bloodType: user.bloodType,
        location: user.location
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        fullName: user.fullName,
        email: user.email,
        bloodType: user.bloodType,
        location: user.location
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { signup, signin };
