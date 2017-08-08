var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one': {
    title: 'Senthilkumars', 
   heading: 'Article one',
   content: ' Whats up bro . This is my first project and it is successful. I am really happy at this point and i want to improve this page. blah... blah... blah... blah... blah... blah... blah... blah... blah... blah... blah... blah... blah...blah... blah... blah...blah...blah...blah...blah...blah...blah...blah...vvblah...blah...blah...vblah...blah...blah...blah...vvblah...blah...blah...vblah...blah...blah...blah...blah...blah...blah...blah...blah...blah...blah...blah...blah...'
    },
    'article-two':{
    title: 'Senthilkumars2', 
   heading: 'Article two',
   content: ' This is my second project and it is successful. I am really happy at this point and i want to improve this page. blah... blah... blah... blah... blah... blah... blah... blah... blah... blah... blah... blah... blah...blah... blah... blah...blah...blah...blah...blah...blah...blah...blah...vvblah...blah...blah...vblah...blah...blah...blah...vvblah...blah...blah...vblah...blah...blah...blah...blah...blah...blah...blah...blah...blah...blah...blah...blah...'
    },
};

function createtemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
var htmltemplate = 
   `<html>
<head> <title>
    ${title} 
</title>
 <link href="/ui/style.css" rel="stylesheet" />
</head>


<body><div class='links'>
    <div>
        <a href="/">Home</a>
    </div>

<h>
    ${heading}
</h>
${content}
</div>
</body>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
var names = [];
app.get('/submit-name', function (req, res) {
 var name = req.query.name;
 names.push(name);
 res.send(JSON.stringify(names));
});


app.get('/:articlename', function (req, res) {
  var articlename = req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names = [];
app.get('/submit-name', function (req, res) {
 var name = req.query.name;
 names.push(name);
 res.send(JSON.stringify(names));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
