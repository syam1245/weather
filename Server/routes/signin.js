const express = require('express');
const router = express.Router();
const User = require('../db');
const { signinValidation, handleValidationErrors } = require('../validators/signinValidator');
const path = require('path');

router.post('/', signinValidation, handleValidationErrors, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find a user with the provided email
    const user = await User.findOne({ email });

    if (user) {
      // Check if the provided password matches the stored hashed password
      const isPasswordValid = await user.comparePassword(password);

      if (isPasswordValid) {

        const filePath = path.join(__dirname, '../components/userDashboard/userDashBoard.html');
        res.sendFile(filePath);
        res.send('Signin successful!');

      } else {
        res.status(401).send('Invalid credentials');
      }
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Error during signin:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
