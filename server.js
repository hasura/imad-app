var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    res.send('article one requested and will be saved heare');
});

app.get('/article-two', function  (req, res) {
   res.send('article two requested and will be saved heare');

app.get('/article-three', function (req, res) {
   res.send('article three requested and will be saved heare');
});

app.get('/', function (req, res) {
   res.sendfile(path.join(__dirname 'ui' . modi.png'png'));
 


var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
}):