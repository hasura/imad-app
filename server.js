var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var f1={
    title:"article1",
    heading:"first article",
    
        content:`<p>
                JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Wikipedia
            </p>
            <p>
                First appeared: December 4, 1995; 22 years ago
                Stable release: ECMAScript 2017 / June 2017; 8 months ago
            </p>
        
            <p>
                Developer: Netscape Communications Corporation, Mozilla Foundation, Ecma International
            Typing discipline: dynamic, duck
        
            </p>
            `
    
    
    
};





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/first',function(req,res){
    res.sendFile(path.join(__dirname, 'ui','first.html'));
});

app.get('/second',function(req,res){
     res.sendFile(path.join(__dirname, 'ui','second.html'));
});

app.get('/third',function(req,res){
    res.sendFile(path.join(__dirname, 'ui','third.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
