var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/Bumblebee.jpg',function(req,res){
    res.sendfile(path.join(__dirname,'Bumblebee.jpg'));
});

app.get('/Bumbly_Prof',function(req,res){
    res.sendfile(path.join(__dirname,'ui','Bumbly_prof.html'));
});

var Articles = {    
    'Article_One' : {
        title:'Article One|Apoorva Kashyap',
        heading:'Article One',
        date:'Aug 7, 20XX',
        content:`
         <p>
            Equipped with the ultimate and most advanced governmental weapon called 'Thunder Master III', you are the last resort, only you can stop them... Fire and Forget is a shooting game featuring an amazing flying 'tank' equipped with 2 deadly weapons. A manual aiming dual cannon and a rocket launcher with auto-guided missiles. While the vehicle move forward by itself at high speed, you just have to focus on avoiding obstacles and blasting the enemies on your way. Free Game features: - Hundred of enemies to blast in each level; - 10 challenging levels in all over a devastated post- apocalyptic world; - Drive and fly the most advanced vehicle ever created; - Destroy as much enemies as you can to reach the best scores; - Customize your vehicle with impressive skins and upgrades
        </p>
        <p>
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.
        </p>
        <p>
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.
        </p> `
    },
    'Article_Two' : {
        title:'Article Two|Apoorva Kashyap',
        heading:'Article Two',
        date:'Aug 14, 20XX',
        content:`
         <p>
            This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.
        </p>
        <p>
            This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.
        </p>
        <p>
            This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.This is the content of the second article.        
        </p> `
    },
    'Article_Three' : {
        title:'Article Three|Apoorva Kashyap',
        heading:'Article Three',
        date:'Aug 21, 20XX',
        content:`
         <p>
            This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.
        </p>
        <p>
            This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.  
        </p>
        <p>
            This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.This is the content of the third article.
        </p> `
    } 
};

function createTemp (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemp = `
        <html>
            <head>
                <title${title}</title>
                <link href="/ui/style.css" rel="stylesheet" />
                <meta name="viewport" content="width=device+width , initial-scale=1"/>
            </head>
            <body>
                <div class=container>
                <a href='/'>Home</a>&emsp;<a href='/ui/Article_One'>Article One</a>&emsp;<a href='/ui/Article_Two'>Article Two</a>&emsp;<a href='/ui/Article_Three'>Article Three</a>
                <hr>
                <div>
                <h1 align="center">${heading}</h1>
                </div>
                <div class=date>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
                </div>
            </body>
        </html>`;
    return htmlTemp;
}

var counter=0;
app.get('/counter' , function(req, res){
counter++;
res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/:articlename',function(req,res){
    var articlename = req.params.articlename;
    res.send(createTemp(Articles[articlename]));
});

//Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
