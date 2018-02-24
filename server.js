var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title: 'Dream Diary',
    date: '24 Februaury 2018',
    heading2: 'Dreams Become true',
    content:
        `<p>                                
            <h3>Hello Everyone</h3><br>
             Myself Shubham a computer geek and tech enthuastic.I am 
             2nd year CSE student in Dronacharya College of Engineering.And today on 24 
             February 2018 I am trying to create my dreams diary online.Well see how far I am
             able to make my dream dairy attractive and beautiful.<br>I hope you will enjoy
             it. For review my dream diary click on the link below.
        </p>`
};

function createTemplate(object){ 
    var title = data.title;
    var date = data.title;
    var content = data.content;
    var htmlTemplate = `
    <html>
      <head>
         <title>${title}</title>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet"/>
      </head>
      
      <body>
        <div class="container">
          <div class="navBar">
            <h2>${heading2}</h2>
            <a href='/'>Home</a>
            <a href='/'>Dreams list</a>
          </div>
          <hr/>
    
          <div class="box">
            ${content}
          </div>
        </div>
      </body>
    </html>
    `;
}
app.get('/ui/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
}); 

app.get('/ui/aim1', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'aim1.html'));
});

app.get('/aim2',function(req,res){
    res.send('AIM2:To create something in C++ as soon as possible');
});

app.get('/aim3',function(req,res){
    res.send('AIM3:To become a best web developer');
});
app.get('/Leno',function(req,res){
    res.send('Leno what is happening to me Can I become a web developer');
});

app.get('/girlfriend',function(req,res){
    res.send('Leno is my best friend and internet is my girlfriend');
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
