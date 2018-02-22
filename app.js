const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./lib/api.js')(app);
const logger = require('./lib/logger.js');

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000);