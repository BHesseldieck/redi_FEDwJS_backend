const bodyparser = require('body-parser');

module.exports = (app) => {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
};
