var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : 'Sandeep Gengineri | Article One',
    heading : 'Article One',
    date : 'Aug 06, 2017',
    content :`<p>
            This is my first Paragraph
        </p>`
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content =  data.content;
    
    var htmlTemplate = `
        <html>
            <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width,intial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h2>
                        ${heading}
                    </h2>
                    <div>
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

app.get('/article-1', function (req, res) {
  res.sendFile(createTemplate(articleOne));
});

app.get('/article-2', function (req, res) {
  res.sendFile(path.join(__dirname, 'article-two.html'));
});

app.get('/article-3', function (req, res) {
  res.sendFile(path.join(__dirname, 'article-three.html'));
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
