var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-two': {
    title: ' Article Two | S.Pawan Kumar',
    heading: ' Article Two',
    date: 'August 8,2017.',
    content: `
        <p>
        This is the content for the second article.
        </p>`
},  
'article-one' : {
    title: 'Article One | S.Pawan Kumar',
    heading: ' Article One',
    date: 'August 7,2017.',
    content: `
        <p>
        This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.
        </p>`
},
 'article-three': {
    title: ' Article Three | S.Pawan Kumar',
    heading: ' Article Three',
    date: 'August 9,2017.',
    content: `
        <p>
        This is the content for the third article.
        </p>`
}
};
function CreateTemplate(data)
{   var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var HtmlTemplate=`
    <html>
    <head>
        <title>
           $(title)
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
     </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            $(heading)
        </h3>
        <div>
           $(date)
        </div>
        <div>
           $(content)
        </div>
        </div>
    </body>
</html>`
return HtmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/:articleName",function(req,res){
    res.send(CreateTemplate(articles[articleName]));
});

/*app.get("/article-two",function(req,res){
    res.send(CreateTemplate(articleOne));
});

app.get("/article-three",function(req,res){
    res.sendfile(path.join(__dirname,'ui', 'article-three.html'));
});*/

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
