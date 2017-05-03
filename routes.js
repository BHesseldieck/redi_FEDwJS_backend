const express = require('express');

// require db controllers
const user = require('./db/controllers/user.js');

const router = express.Router();

router.get('/user', (req, res) => { res.send("Hello")});

module.exports = router;
