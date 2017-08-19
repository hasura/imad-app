var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne: {
        title: 'Article One | Chintamani Koli',
        heading: 'Article One',
        date: 'Aug 20, 2017',
        content: ` <p>
                        This is the content for first article one and will be related to Introduction to Modern Application Development. Followed by Phyton Programming
                    </p>
                    <p>
                        This is the content for first article one and will be related to Introduction to Modern Application Development. Followed by Phyton Programming
                    </p>
                    <p>
                        This is the content for first article one and will be related to Introduction to Modern Application Development. Followed by Phyton Programming
                    </p>`
    },
    articleTwo: {
        title: 'Article Two | Chintamani Koli',
        heading: 'Article Two',
        date: 'Aug 21, 2017',
        content: ` <p>
                        This is the content for second article one and will be related to Introduction to Modern Application Development. Followed by Phyton Programming
                    </p>`
    },
    articleThre: {
        title: 'Article Three | Chintamani Koli',
        heading: 'Article Three',
        date: 'Aug 22, 2017',
        content: ` <p>
                        This is the content for third article one and will be related to Introduction to Modern Application Development. Followed by Phyton Programming
                    </p>`
    }
  
};    


function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html> 
        <head> 
            <title> 
                ${title}
            </title>
            <meta name="viewport" content="width-device-width,intial-scale=1">
          <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function (req, res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
