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
  var title = 'Swig Primer!'
  var description = 'Swig is "a simple, powerful, and extendable JavaScript Template Engine" for NodeJS.'
  function allthethings() {
    return '<span>All the things!</span>';
  }
  res.render('index.html', {
    title: title,
    description: description,
    allthethings: allthethings
  });
});
app.get('/filter', function(req, res) {
  res.render('filter.html', {
    title: 'Hello, World!',
    date: new Date(),
    nameArray: ['This', 'is', 'just', 'an', 'example']
  });
});
app.get('/logic', function(req, res) {
  var title = 'Swig Logic!'
  var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  res.render('logic.html', {title: title, numberArray: numberArray});
});
app.get('/test', function(req, res) {
  var title = 'Inheritence in Action!'
  res.render('test.html', {title: title});
});

// *** create server *** //
var server = app.listen(3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});


