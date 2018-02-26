var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require ('pg').Pool;
 
var config={
    user: 'parmeetasi',
    database: 'parmeetasi',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    
   password: 'db-parmeetasi-21419'
   // password: process.emv.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title: 'Article One | Parmeet Singh',
        heading: 'Article One',
        date: '13-FEB-2017',
        content: `<p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
                </p>
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
                </p>
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
                </p>
        
        `
    },
    'article-two':{
        title: 'Article Two | Parmeet Singh',
        heading: 'Article Two',
        date: '14-FEB-2017',
        content: `<p>
                   This is the content for my second article. 
                </p>
        
        `
    },
    'article-three':{
        title: 'Article Three | Parmeet Singh',
        heading: 'Article Three',
        date: '17-FEB-2017',
        content: `<p>
                 This is the content for my third article.
                </p>
        
        `
    }
};



function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial scale=1" />
        <link href="ui/style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            <div>${date}</div>
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

var pool=new Pool(config);
app.get('/test-db',function(req,res){
   //make a select request 
   //return a response with results
   
   pool.query('SELECT * FROM user', function(err, result){
       if(err){
           res.status(500).send(err.toString());
       }else{
            res.send(JSON.stringify(result));
       }
   })
});


//counter 
var counter=0;
app.get('/counter', function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
});


//
var names=[];
app.get('/submit-name', function(req,res) {
  //get the name from the request
  var name = req.query.name;
  names.push(name);
  //JSON
  res.send(JSON.stringify(names));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



//--------user changes-----------

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
