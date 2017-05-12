const express = require('express');

// require db controllers
const userCtrl = require('./db/controllers/userCtrl.js');

const router = express.Router();

router.get('/user', userCtrl.fetchUsers);
router.post('/newuser', userCtrl.createUser);
router.delete('/deleteuser', userCtrl.deleteUser);
router.post('/updateuser', userCtrl.updateUser);
router.get('/*', (req,res) => { res.status(404).send('Welcome to the ReDI School API. Unfortunately is the sub-page you requested non-existent!'); })

module.exports = router;
