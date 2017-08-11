var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var pageContent = {
    title: "iMAD Web Application Example",
    date: "11-Aug-2017",
    header: "Main Page",
    content: `<p>This is contents for Page 1 which is pretty long
    and has several few lines of text, written into the server dot js file
    as an object </p>
    <p> This is another paragraph to show how paragraphs are formatted by html and how
    they are distinguished </p>`
};
function makePage(data) {
    var frontPageTemplate = `
        <html>
          <head>
            <title> ${data.title} </title>
            <link rel="stylesheet" href="ui/style.css">
          </head>
          <body>
            <div class = "container">
                <div>
                    <a href="/"> Home </a?
                    <br/>
                </div>
                <h1>
                    ${data.header}
                 </h1>
                <div>
                    ${data.date}
                </div>
                <div>
                    ${data.content}
                </div>
            
            </div>
          </body>
        </html>
        `;
    return frontPageTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req,res) {
    res.send(makePage(pageContent));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
