const express = require('express');
const app = express();

const port = process.env.PORT || 1337;

require('./db/config.js');
require('./middleware.js')(app);
require('./routes.js')(app);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});