const express = require('express');

// require db controllers
const userCtrl = require('./db/controllers/userCtrl.js');

const router = express.Router();

router.get('/api/user', userCtrl.fetchUser);
router.post('/api/user', userCtrl.createUser);
router.delete('/api/user', userCtrl.deleteUser);
router.post('/api/user/update', userCtrl.updateUser);
router.get('/api/user/all', userCtrl.fetchAll);
router.get('/*', (req,res) => { res.status(404).send('Welcome to the ReDI School API. Unfortunately is the sub-page you requested non-existent!'); })

module.exports = router;
