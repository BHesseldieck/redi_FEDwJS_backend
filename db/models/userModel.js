const mongoose = require('mongoose');
mongoose.promise = require('bluebird');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  helper: Boolean,
  seeker: Boolean,
  languages: [String],
  bio: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model('user', userSchema);
