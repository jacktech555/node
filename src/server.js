const express = require('express');
const bodyParser = require('body-parser');
//const config = require('config');
//const mongoDbConnection = require('../config/connection');
// const controllers = require('./controllers/index');

const app = express();
const router = express.Router();
router.get('/ping',(req, res) => {
  res.send("pong.");
})
app.use(bodyParser.json());
// app.use(controllers);
app.listen(3000, () => {
  //console.log(`listening to port ${config.get('port')}`);
});
//mongoDbConnection();
