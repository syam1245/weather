require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

// Connect to the database
mongoose.connect(process.env.DATA_BASE_URI);

module.exports = User;
