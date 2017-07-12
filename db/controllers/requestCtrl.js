const Request = require('../models/requestModel.js');

exports.createRequest = (req, res) => {
  Request.create({
    subject: req.body.subject,
    seeker: req.body.seeker,
    helper: req.body.helper,
    date: req.body.date,
    accepted: req.body.accepted,
    location: {
      "streetAddress": req.body.streetAddress,
      "city": req.body.city,
      "state": req.body.state,
      "zip": req.body.zip,
    },
  })
  .then((createdRequest) => {
    res.status(200).send('New Request created successfully');
  })
  .catch((error) => {
    res.status(404).send(`Request creation failed due to error: ${error}`);
  })
};

exports.updateRequest = async (req, res) => {
  Request.findByIdAndUpdate({_id: req.body._id}, {$set: req.body}, {new: true}, 
    (err, updatedRequest) => {
      if (err) {
        res.status(500).send(`Request update failed due to error: ${err}`);
      } 
      if (updatedRequest) {
        res.json(updatedRequest);
      } else {
        res.status(404).send(`Request with id: ${req.body._id} does not exist`);
      }
    })
};

exports.deleteRequest = (req, res) => {
  Request.deleteOne({_id: req.body._id}, (err) => {
    if (err) {
      res.status(500).send(`Deleting Request failed due to error: ${err}`);
    } else {
      res.status(200).send(`Deleted Request with id: ${req.body._id} successfully`);
    }
  })
};

exports.fetchRequest = (req, res) => {
  Request.findOne({_id: req.params.oid})
  .then((foundRequest) => {
    if (foundRequest) {
      res.json(foundRequest);
    } else {
      res.status(404).send(`Request with id: ${req.params.oid} does not exist`);
    }
  })
  .catch((error) => {
    res.status(500).send(`Fetching request with id: ${req.params.oid} failed`);
  })
};

exports.fetchAll = (req, res) => {
  Request.find({}, (err, results) => {
    if (err) {
      res.status(500).send(`Fetching all requests failed due to error: ${err}`);
    } else {
      res.json(results);
    }
  })
};