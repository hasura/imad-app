var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    
   first:{
    title:"article1",
    head:"first article",
    
        content:`<p>
                JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Wikipedia
            </p>
            <p>
                First appeared: December 4, 1995; 22 years ago
                Stable release: ECMAScript 2017 / June 2017; 8 months ago
            </p>
        
            <p>
                Developer: Netscape Communications Corporation, Mozilla Foundation, Ecma International
            Typing discipline: dynamic, duck
        
            </p>
            `
    
    
    
    },
    second:{
            title:"article2",
            head:"second article",
    
            content:`<p>
                    JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Wikipedia
                </p>
                
            
                <p>
                    Developer: Netscape Communications Corporation, Mozilla Foundation, Ecma International
                Typing discipline: dynamic, duck
            
                </p>
                `
         }   
        
    };
    
  


function create(data)
{
    var title=data.title;
     var head=data.head;
      var content=data.content;
    

var htmlt=`
            <html>
        <head>
        <title>${title}</title>
        
           <link href="/ui/style.css" rel="stylesheet">
        
        
        <body>
        <div>
          <a href='/'>HOME</a>
        </div>
        <hr/>
        <h1 style="align:center"> ${head}</h1>
        <div class="container">
            <div>
                
              ${content}  
            </div>
        </div>
        </body>
        </html>
`;
return htmlt;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/third',function(req,res){
    res.sendFile(path.join(__dirname, 'ui','third.html'));
});

app.get('/:articleName',function(req,res){
    
    articleName=req.params.articleName;
    res.send(create(article[articleName]));
});






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
