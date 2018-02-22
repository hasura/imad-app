var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/guess', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'guess.html'));
});
app.get('/app', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.html'));
});
app.get('/ui/guess.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'guess.css'));
});
app.get('/ui/guess.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'guess.js'));
});
app.get('/ui/app.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.css'));
});
app.get('/ui/app.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/download.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
