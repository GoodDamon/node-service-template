const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/default.js');
const api = require('./lib/api.js')(app);
const logger = require('./lib/logger.js');

app.set('config', config);

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'))

app.listen(3000);