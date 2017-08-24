var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pg = require('pg').Pool;

var app = express();

var config = {
    user: 'mramanm',
    database: 'mramanm',
    host: 'db.imad.hasura-app.io',
    password: process.env.DB_PASSWORD,
    port: '5432'
};

var pageContents = {
    'article-one' : {
        title: "iMAD Web Application Example",
        date: "11-Aug-2017",
        header: "Main Page",
        content: `<p>This is contents for Page 1 which is pretty long
        and has several few lines of text, written into the server dot js file
        as an object </p>
        <p> This is another paragraph to show how paragraphs are formatted by html and how
        they are distinguished </p>`
    },
    'article-two' : {
        title: "iMAD Web Application Refresher",
        date: "24-Sep-2016",
        header: "Page Two",
        content: `<h1>Important </h1>
        <p> In order to make your learning process smooth and your experience at IMAD better, we advise you to please read 
        this </p>`  
    },
    'article-three' : {
        title: "iMAD Web Application Reminder",
        date: "15-Nov-2015",
        header: "Page Three",
        content: `<h1>Attention </h1>
        <p> As a poke at Emacs' creeping featurism, vi advocates have been known to describe Emacs as "a great operating system, lacking only a decent editor". Emacs advocates have been known to respond that the editor is actually very good, but the operating system could use improvement (referring to Emacs' famous lack of concurrency.) </p>
        <p> 
            A game among UNIX users, either to test the depth of an Emacs user's understanding of the editor or to poke fun at the complexity of Emacs, involved predicting what would happen if a user held down a modifier key (such as Control or Alt) and typed their own name. A similar "game" was reportedly played[32] among users of the old TECO editor, in which lay the roots of Emacs.
        </p>
        <p>
        Due to the unintuitive character sequence to exit vi (":q!"), hackers joke that there is a proposed method of creating a pseudorandom character sequence by having a user unfamiliar with vi seated in front of an open editor and asking them to exit the program.
        </p>
        `         
    }
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
                    <a href="/" > Home </a>
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
var names = [];
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/submit-info', function (req,res) {
 var name = req.query.name;
 names.push(name);
 res.send(JSON.stringify(names));
});
var pool = new pg(config);

app.get('/test-db', function(req,res){
  pool.query('SELECT * FROM client_master' , function (err, result){
     if ( err) {
         res.status(500).send(err.toString());
     } 
     else {
         res.send(JSON.stringify(result));
     }
  });
 //res.send(" I am alive for now!");
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function (req,res) {
    res.send(makePage(pageContents[req.params.articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
