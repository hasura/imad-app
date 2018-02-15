var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articles=require('./ui/articles');
var template=require('./ui/article-template');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/:id', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.id));
});
app.get('/:article', function (req, res) {
  res.send(template(articles[req.params.article]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
