var express = require('express'),
  path = require('path'),
  logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, './')));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var port = app.listen(process.env.PORT || 3000);
app.listen(port);