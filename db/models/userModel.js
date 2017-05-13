const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const userSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  firstName: String,
  lastName: String,
  helper: Boolean,
  seeker: Boolean,
  languages: [String],
  bio: String,
  email: {type: String, unique: true},
  phone: String,
});

module.exports = mongoose.model('user', userSchema);
