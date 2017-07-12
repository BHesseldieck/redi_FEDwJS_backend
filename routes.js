const express = require('express');

// require db controllers
const userCtrl = require('./db/controllers/userCtrl.js');
const requestCtrl = require('./db/controllers/requestCtrl.js');

const router = express.Router();
const secret = process.env.secret; // || require('./keys').secret;

const authenticate = (req, res, next) => {
  if(req.headers.authorization === secret) {
    next();
  } else {
    res.status(403).end('Access denied');
  }
};

router.post('/api/user', authenticate, userCtrl.createUser);
router.delete('/api/user', authenticate, userCtrl.deleteUser);
router.post('/api/user/update', authenticate, userCtrl.updateUser);
router.get('/api/user/all', authenticate, userCtrl.fetchAll);
router.get('/api/user/:username', authenticate, userCtrl.fetchUser);

router.post('/api/request', authenticate, requestCtrl.createRequest);
router.delete('/api/request', authenticate, requestCtrl.deleteRequest);
router.post('/api/request/update', authenticate, requestCtrl.updateRequest);
router.get('/api/request/all', authenticate, requestCtrl.fetchAll);
router.get('/api/request/:oid', authenticate, requestCtrl.fetchRequest);

router.get('/*', (req,res) => { res.status(404).send('Welcome to the ReDI School API. Unfortunately is the sub-page you requested non-existent!'); })

module.exports = router;
