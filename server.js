var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Article_One.html',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'Wiki.html'));
});

app.get('/ui/Article_Two.html',function(req,res){
    res.sendfile(path.join(__dirname,'ui','Article_Two.html'));
});

app.get('/ui/Article_Three.html',function(req,res){
    res.sendfile(path.join(__dirname,'ui','Article_Three.html'));
});

app.get('/Bumblebee.jpg',function(req,res){
    res.sendfile(path.join(__dirname,'Bumblebee.jpg'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


//Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
