// *** main dependencies *** //
var express = require('express');
var path = require('path');
var swig = require('swig');

// *** express instance *** //
var app = express();

// *** view engine *** //
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** main routes *** //
app.get('/', function(req, res) {
  res.render('index.html');
});

// *** create server *** //
var server = app.listen(3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});
