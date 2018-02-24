var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var dreams = {
    home : {
        title: 'Dream Diary',
        date: '24 Februaury 2018',
        heading2: 'Dreams Become true',
        content:
            `<p>                                
                <h3>Hello Everyone</h3><br>
                 Myself Shubham a computer geek and tech enthuastic.I am 
                 2nd year CSE student in Dronacharya College of Engineering.And today on 24 
                 February 2018 I am trying to create my dreams diary online.Well see how far I am
                 able to make my dream dairy attractive and beautiful.<br>I hope you will enjoy
                 it. For review my dream diary click on the link below.
            </p>`
    },
    
    dream1 : {content:`<p>This is the content of dream1</p>`},
    dream2 : {content:`<p>This is the content of dream 2</p>`},
    dream3 : {content:`<p>This is the content of dream 3</p>`},
    
};

function createTemplate(data){ 
    var title = data.title;
    var date = data.date;
    var heading2 = data.heading2; 
    var content = data.content;
    var htmlTemplate = `
    <html>
      <head>
         <title>${title}</title>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet"/>
      </head>
      
      <body>
        <div class="container">
          <div class="navBar">
            <h2>${heading2}</h2>
            <a href='/'>Home</a>
            <a href='/'>Dreams list</a>
          </div>
          
          <hr/>
    
          <div class="box">
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

app.get('/:dreamName', function(req, res) {
    //dreamName = dream1
    //dream[dreamName] = dream[dream1]
    var dreamName = req.params.dreamName ; //To extract the information from dreamName parameter;
    res.send(createTemplate(dreams[dreamName]));
});

app.get('/Leno',function(req,res){
    res.send('Leno what is happening to me Can I become a web developer');
});

app.get('/girlfriend',function(req,res){
    res.send('Leno is my best friend and internet is my girlfriend');
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
