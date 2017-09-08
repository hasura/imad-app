var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/arcticle-one",function(req,res){
    res.send("ariticle one requested and will be served here");
});



app.get("/arcticle-tWO",function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'arcticle-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});