const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Adding a method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Adding a pre-save hook to hash the password
userSchema.pre('save', async function(next) {
  // Only hash the password if it is modified or new
  if (this.isModified('password') || this.isNew) {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    // Replace the password with the hashed one
    this.password = hash;
  }
  // Call the next middleware
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
