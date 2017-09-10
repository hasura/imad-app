var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');

var config = {
    user: 'ssttrinath',
    database: 'ssttrinath',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var counter=0;
app.get('/counter', function(req, res) {
    counter++;
    res.send(counter.toString());
});

function hash(input, salt) {
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ['pabkdf2', '10000', salt, hashed.toString('hex')].join('$');
}
app.get('/hash/:input', function(req, res) {
    var hashedString = hash(req.params.input, 'This-is-some-random-string');
    res.send(hashedString);
});

app.get('/create-user', function(req, res) {
    //username, password
    //JSON
    var username = req.body.username;
    var password = req.body.password;
    
    var salt = crypto.randomBytes(128).toString('hex');
    var dbString = hash(password, salt);
    pool.query('INSERT INTO "user"(username, password) VALUES($1, $2)', [username, dbString], function(err, result) {
        if(err) {
            res.status(500).send(err.toString());
        } else {
            res.send('User is successfully created with username '+username);
        }
    });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/submit-name', function(req, res) {
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var pool = new Pool(config);
/*
app.get('/test-db', function(req, res) {
    //make a select request
    //return a response with the results
    pool.query('SELECT * FROM test', function(err, result){
        if(err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result.rows));
        }
    });
});
*/
var createTemplate = function(data) { 
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var template =  `
        
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="view-port" content="width=device-width, initial-scale=1/">
            <!--<link type="text/css" rel="stylesheet" href="ui/style.css"/>-->
            <style>
                body{
                    background-color: lightgrey;
                    padding: 0px 20px 0px 20px ;
                }
                
                .container {
                    max-width: 800px;
                    font-family: 'Roboto', sans-serif;
                    padding: 60px 40px 40px 40px;
                    margin: 0 auto;
                    background-color: #ffffff;
                }
                
                .heading{
                    color: #f45f42;
                }
                
                .date{
                    color: #4286f4;
                }
                
                .center {
                    text-align: center;
                }
                
                .text-big {
                    font-size: 300%;
                }
                
                .bold {
                    font-weight: bold;
                }
                
                .img-medium {
                    height: 200px;
                }
            </style>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h2 class="heading">
                    ${heading}
                </h2>
                <div class="date">
                    ${date.toDateString()}
                </div>
                <div>
                    ${content}
                </div>
                <hr />
                <div class="comments">
                    <h3>Comments</h3>
                    <hr />
                    <textarea maxlength=150></textarea> <br>
                    <input type="submit" id="submit-comm">
                    <input type="reset" id="clear">
                </div>
            </div>
        </body>
    </html>
    `;
    return template;
};

app.get('/articles/:articleName', function(req, res){
    //aticleName create the object as per the url typed by user.
    
    pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName] , function(err, result){
       if(err) {
           res.status(500).send(err.toString());
       } else {
           if(result.rows.length === 0) {
               res.status(404).send('Article not found');
           } else {
               var articleData = result.rows[0];
               res.send(createTemplate(articleData));
           }
       }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
