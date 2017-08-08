var articles={
'article-one':{
    title:'Article One',
    heading:'Article One',
    date:'Sep 5 2016',
    content:`<p>
              This is the content for my first article.This is the content for my first article.This is the content for my first article.
              This is the content for my first article.This is the content for my first article.This is the content for my first article.
          </p>
          <p>
              This is the content for my first article.This is the content for my first article.This is the content for my first article.
              This is the content for my first article.This is the content for my first article.This is the content for my first article.
          </p>`
},
'article-two':{title:'Article Two',
    heading:'Article Two',
    date:'Sep 5 2016',
    content:`<p>
              This is the content for my second article. This is the content for my second article. This is the content for my second article. 
              This is the content for my second article. This is the content for my second article. This is the content for my second article. 
          </p>
          <p>
              This is the content for my second article. This is the content for my second article. This is the content for my second article. 
              This is the content for my second article. This is the content for my second article. This is the content for my second article. 
          </p>`},
'article-three':{title:'Article Three',
heading:'Article Three',
date:'Sep 5 2016',
content:`<p>
              This is the content for my third article. This is the content for my third article. This is the content for my third article. 
              This is the content for my third article. This is the content for my third article. This is the content for my third article. 
           </p>
          <p>
              This is the content for my third article. This is the content for my third article. This is the content for my third article. 
              This is the content for my third article. This is the content for my third article. This is the content for my third article. 
          </p>`}};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmltemplate=`<html>
 <head>
   <title>
        ${title}
   </title>
 //  <style>
   //    .container{
    //margin: 0 auto;
    //color: darkgrey;
    //font-family: sans-serif;
    //padding-right: 20px; 
    //padding-top: 50px;
    //padding-left: 20px;
   //}
   //</style>
 </head>
 <body>
    <div class="container">
    <div>
     <a href="/">Home</a>
     </div>
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
</html>`
return htmltemplate;
}
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
//app.get('/articleTwo', function (req, res) {
  // res.sendFile(path.join(__dirname,'ui','articleTwo.html'));
//});
//app.get('/articleThree', function (req, res) {
 //  res.sendFile(path.join(__dirname,'ui','articleThree.html'));
//});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
