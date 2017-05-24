const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const userSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  helper: Boolean,
  seeker: Boolean,
  languages: [String],
  bio: String,
  email: {type: String, unique: true, required: true},
  phone: String,
});

module.exports = mongoose.model('user', userSchema);
