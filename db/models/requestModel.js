const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Users = require('./userModel.js');

const requestSchema = new mongoose.Schema({
  subject: {type: String, required: true},
  seeker: {type: String, ref: 'user', required: true},
  helper: {type: String, ref: 'user', required: true},
  date: {type: Date, required: true},
  accepted: {type: Boolean, default: false},
  location: {
    "streetAddress": String,
    "city": String,
    "state": String,
    "zip": String,
  }
}, {timestamps: true});

requestSchema.pre('save', async function(next) {
  var seeker = await Users.findOne({username: this.seeker});
  var helper = await Users.findOne({username: this.helper});
  if (seeker && helper) {
    return next();
  }
  return next(new Error("Seeker or Helper does not exist"));
});

module.exports = mongoose.model('request', requestSchema);
