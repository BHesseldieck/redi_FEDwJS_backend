const express = require('express');
const app = express();
const router = require('./routes.js');

const port = process.env.PORT || 1337;

require('./db/config.js');
require('./middleware.js')(app);
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
