path = require('path');

var server = {
  listenPort: 4000,
  distFolder: path.resolve(__dirname, '../client/dist'),
  staticUrl: path.resolve(__dirname, '../client/dist/static'),
};

module.exports = server;