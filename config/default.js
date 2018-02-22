const prod = require('./prod.json');
const qa = require('./qa.json');

const config = process.ENV === 'prod' ? prod : qa;

module.exports = config;