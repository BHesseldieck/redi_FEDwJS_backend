const Promise = require('bluebird');
const User = require('../models/userModel.js');

exports.createUser = (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    helper: req.body.helper || false,
    seeker: req.body.seeker || false,
    languages: req.body.languages || [],
    bio: req.body.bio,
    email: req.body.email,
    phone: req.body.phone || 'none',
  })
  .then((createdUser) => {
    console.log('created User:', createdUser);
    res.status(200).send('New User created successfully');
  })
  .catch((error) => {
    res.status(404).send(`User creation failed due to error: ${error}`);
  })
};

exports.updateUser = (req, res) => {};

exports.deleteUser = (req, res) => {};

exports.fetchUsers = (req, res) => {};