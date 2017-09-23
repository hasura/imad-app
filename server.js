var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var page =
{
    pageone:
    {
    name:`vijay`,
    age:`21`,
    fathername:`kannan`
    link:'/ui/pagetwo'
        
    },
    pagetwo:
    {
    name:`suhail`,
    age:`21`,
    fathername:`sahul`
    link:'/ui/pagethree'
    },
    pagethree:
    {
    name:`suhail`,
    age:`21`,
    fathername:`sahul`
    link:'/'
    }
};

function template(value)
{
    var name=value.name,age=value.age,fathername=value.fathername;
    
    var content=`
        <!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="center">
            <img src="/ui/madi.png" class="img-medium"/>
        </div>
        <br>
        <div class="center text-big bold">
			${name};<br> ${age}<br>${fathername}<br>
			<a href="${link}">next</a><br>
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>
    `;
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

app.get('/ui/page1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
