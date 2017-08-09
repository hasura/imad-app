var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'articleone' : {
  title:'Article 1: Learning to use html is really simple!!',
  heading:'Article One',
  content:`<p>
                html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.
            <p>
            <p>
                html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.
            <p>`
},
 'articletwo' : {
  title:'Article Two: Learning to use html  is really simple',
  heading:'Article Two',
  content:`<p>
                html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.
            <p>
            <p>
                html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.
            <p>`
},
 'articlethree' : {
  title:'Article Three: Learning to use html  is really simple',
  heading:'Article Three',
  content:`<p>
                html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.
            <p>
            <p>
                html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.html is one of the most simple syntax of any language that is interpreted by software.
            <p>`
}
};

function createTemplate(data){
var title = data.title;    
var heading = data.heading;
var content = data.content;
var htmlTemplate = 
  `<html>
    <head>
      <title>
          ${title} 
      </title>
      <meta name="viewport" content="width-device-width,initial-scale-1"/>
      <link href="/ui/style.css" rel="stylesheet"/>
    </head>

    <body>
      
        <h1>
           ${heading}
        </h1>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <div the cool paragraphs>
            ${content}
            </div>
        </div>
        
        
        
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));
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
