const mongoose = require('mongoose');
const config = require('config');

const mongoURI =
  config.get('dbConfig.connectionString') + config.get('dbConfig.dbName');

module.exports = () => {
  mongoose.connect(mongoURI);
  mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${mongoURI}`);
  });
  mongoose.connection.on('error', (err) => {
    console.log(`Failed to connect mongoose to ${mongoURI} due to ${err}`);
  });
};
