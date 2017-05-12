const mongoose = require('mongoose');
const mongoUser = require('../keys').user;
const mongoPassword = require('../keys').password;

const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@ds133981.mlab.com:33981/redi_fedwjs_zungebot`;
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongodb connection open'));

module.exports = db;
