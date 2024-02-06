const express = require('express');
const router = express.Router();
const User = require('../db');
const { signupValidation, handleValidationErrors } = require('../validators/signupValidator');


router.post('/', signupValidation, handleValidationErrors, async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Check if the email already exists in the database
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(400).send('Email already exists');
    } else {
      // Insert the signup data into the users collection
      await newUser.save();
      res.send('Signup successful!');
    }
  } catch (error) {
    console.error('Error saving user to MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
