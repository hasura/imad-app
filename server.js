var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articleOne= {
    title :"article-one rajesh",
    heading: "article one",
    data: "sep,5,2016",
    content:
   ` <p>
                       <li> who are you?</li>
                        <li>what do u need from this?</li>
                        <li>are you going to have an onine interview?</li>
                        <li>if yes please go to other website.</li>
    </p>            
                     <p>
                        <li> who are you?</li>
                        <li>what do u need from this?</li>
                        <li>are you going to have an onine interview?</li>
                        <li>if yes please go to other website.</li>
                    </p>
                    <p>
                       who are you?
                        what do u need from this?
                         are you going to have an onine interview?
                        if yes please go to other website.
    </p>`
};
function createTemplate(data)
  var title=data.title;
  var date=data.date;
  var heading=data.heading;
  var content=data.content

var html Template=
    `<html>
     <head>
         <title>
                  S{title}
         </title>
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
       </head>
       <div class="centre">
             <div>
                 <a href="/">Home</a>
             </div>
         
                 <h3>
                     S{heading}
                 </h3>
                 <div>
                 S{date}
                 </div>
                 <div>
 
                    S{content}
                 
                 </div>
          </div>
       </body>
     
</html>`
;
return html Template;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
  
});
app.get('/article-one', function(req,res){
       res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});
app.get('/article-two', function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req,res){
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
