const Promise = require('bluebird');
const User = require('../models/userModel.js');

exports.createUser = (req, res) => {
  User.create({
    username: req.body.username,
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

exports.updateUser = (req, res) => {
  User.findOneAndUpdate({username: req.body.username}, {$set: req.body}, {new: true}, 
    (err, updatedUser) => {
      if (err) {
        res.status(500).send(`Update failed due to error: ${err}`);
      } else {
        res.status(200).send(updatedUser);
      }
    })
};

exports.deleteUser = (req, res) => {
  User.deleteOne({username: req.body.username}, (err) => {
    if (err) {
      res.status(500).send(`Deleting failed due to error: ${err}`);
    } else {
      res.status(200).send(`Deleted User ${req.body.username} successfully`);
    }
  })
};

exports.fetchUser = (req, res) => {
  User.findOne({username: req.query.username})
  .then((foundUser) => {
    console.log(foundUser);
    res.json(foundUser);
  })
  .catch((error) => {
    res.status(404).send('User does not exist');
  })
};
