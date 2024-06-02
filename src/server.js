
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/savings', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
