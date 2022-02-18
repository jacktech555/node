const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const mongoDbConnection = require('../config/connection');
const controllers = require('./controllers/index');

const app = express();
app.use(bodyParser.json());
app.use(controllers);
app.listen(config.get('port'), () => {
  console.log(`listening to port ${config.get('port')}`);
});
mongoDbConnection();
