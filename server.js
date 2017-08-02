var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
      title: 'Article One | Nitin Jain',
      heading: 'Article One',
      date: 'August 2 2017',
      content: '<p>This is the content for the article one.</p>'
    },
    'article-two' : {
      title: 'Article Two | Nitin Jain',
      heading: 'Article Two',
      date: 'August 3 2017',
      content: '<p>This is the content for the article two.</p>'
    },
    'articl-tThree' : {
      title: 'Article Three | Nitin Jain',
      heading: 'Article Three',
      date: 'August 4 2017',
      content: '<p>This is the content for the article three.</p>'
    }
};

function createTemplate(data) {
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
        <!doctype html>
        <html>
            <head>
                <title>
                    $[title]
                </title>
                <link href="/ui/style.css" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <div class="container">
                    <a href='/'>Home</a>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
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

app.get('/:articleName', function (req, res) { // this is the feature of express framework
    // This is the object of articles names which we will pass in url bar
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
