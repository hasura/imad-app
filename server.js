var express = require('express');
var morgan = require('morgan');
var path = require('path');
const PORT = PORT = process.env.PORT || 5000

var app = express();
app.use(morgan('combined'));


var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1 ;
  res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
  'article-one' :{
    title : 'Article One | Akash Hadagali',
    heading : 'Article One',
    date : 'Sep 11, 2016',
    content : `<p>
      This is the content for my first article.
      This is the content for my first article.
      This is the content for my first article.
      This is the content for my first article.
    </p>
    <p>
      This is the content for my first article.
      This is the content for my first article.
      This is the content for my first article.
      This is the content for my first article.
    </p>`
  },
  'article-two' :{
    title : 'Article Two | Akash Hadagali',
    heading : 'Article Two',
    date : 'Sep 5, 2016',
    content : `<p>
      This is the content for my second article.
      This is the content for my second article.
      This is the content for my second article.
      This is the content for my second article.
    </p>
    <p>
      This is the content for my second article.
      This is the content for my second article.
      This is the content for my second article.
      This is the content for my second article.`
  },
  'article-three' :{
    title : 'Article Two | Akash Hadagali',
    heading : 'Article Two',
    date : 'Sep 12, 2016',
    content :
    `<p>
      This is the content for my third article.
      This is the content for my third article.
      This is the content for my third article.
      This is the content for my third article.
    </p>
    <p>
      This is the content for my third article.
      This is the content for my third article.
      This is the content for my third article.
      This is the content for my third article.
      </p>`
  }

};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    var htmlTemplate = `
      <html>
        <head>
          <title>
            ${title}
          </title>
          <meta name="viewport" content="width=device-width, intial-scale=1">
          <link href="/ui/style.css" rel="stylesheet" />

        </head>
        <body>
          <div class = "container">
              <div>
                <a href = '/'>Home</a>
              </div>
              <hr>
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

};

var names = [];
app.get('/submit-name', function (req, res) {
  var name = req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/kaneki.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kaneki.jpg'));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80


app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
