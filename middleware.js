const bodyparser = require('body-parser');

module.exports = (app) => {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('access-control-allow-headers', 'content-type, accept');
    res.header('access-control-max-age', 10);
    next();
  });
};
