var http    = require('http');
var express = require('express');
var config  = require('./config');

var app     = express();
var server  = http.createServer(app);

console.log('Server running');

app.use(express.static(config.staticUrl));

app.all('/*', function(req, res) {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');

  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', { root: config.distFolder });

});

server.listen(process.env.PORT || config.listenPort);