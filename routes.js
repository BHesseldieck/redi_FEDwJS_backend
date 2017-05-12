const express = require('express');

// require db controllers
const userCtrl = require('./db/controllers/userCtrl.js');

const router = express.Router();

router.get('/api/user', userCtrl.fetchUsers);
router.post('/api/newuser', userCtrl.createUser);
router.delete('/api/deleteuser', userCtrl.deleteUser);
router.post('/api/updateuser', userCtrl.updateUser);
router.get('/*', (req,res) => { res.status(404).send('Welcome to the ReDI School API. Unfortunately is the sub-page you requested non-existent!'); })

module.exports = router;
