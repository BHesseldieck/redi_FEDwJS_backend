const express = require('express');

// require db controllers
const user = require('./db/controllers/user.js');

const router = express.Router();

router.get('/user', (req, res) => { res.send("Hello")});
router.get('/*', (req,res) => { res.status(404).send('Welcome to the ReDI School API. Unfortunately is the sub-page you requested non-existent!'); })

module.exports = router;
