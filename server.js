var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
  title: ' Article one | Saka Sai Trinath',
  heading: 'Article One',
  date:' Aug 17, 2017',
  content: 
    `<p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod congue diam, finibus varius arcu euismod eu. Ut fringilla sem maximus ornare sollicitudin. Nulla ut ipsum eu ex aliquet commodo. Sed malesuada pretium est, sed lacinia neque molestie eget. Fusce suscipit velit rutrum purus imperdiet, fermentum gravida magna rhoncus. Aenean ac ex vitae risus lacinia blandit tempus in justo. Vestibulum hendrerit sagittis libero quis placerat. Nunc sed interdum justo, ut condimentum arcu. Quisque aliquam laoreet venenatis. In hac habitasse platea dictumst. Morbi vulputate risus quis purus ultricies, at pulvinar justo auctor.
        </p>
        <p>    
            Vestibulum at imperdiet nunc. Morbi id dolor convallis, euismod lectus et, lacinia metus. Ut euismod molestie felis eget rhoncus. Donec porttitor mauris rhoncus sapien sagittis, vitae ornare nisl iaculis. Vestibulum porttitor nisi leo, id laoreet eros ornare id. Aenean ligula elit, facilisis nec eros ac, maximus viverra eros. Aliquam viverra, nibh in sodales iaculis, elit eros finibus turpis, vel porta sem purus quis tellus. Donec a finibus neque, vel tincidunt lectus. Vivamus sit amet aliquet ipsum. Vestibulum condimentum erat vel laoreet cursus. Aenean bibendum, metus id imperdiet pretium, arcu augue mattis turpis, in aliquet dolor nibh non urna. Integer egestas augue ac turpis congue, congue placerat orci pulvinar. In gravida augue non orci dictum, vitae aliquam dolor interdum. Nullam nec fringilla risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse placerat sollicitudin eros sit amet sodales.
        </p>    
        <p>
            Aliquam ultrices, arcu sed semper sollicitudin, dui est aliquam nunc, non lobortis nunc augue sed elit. Vivamus sapien neque, pellentesque ac dictum in, vehicula a sem. Donec purus leo, pharetra sit amet consectetur luctus, condimentum et augue. Cras dolor mi, placerat vitae leo vel, suscipit egestas purus. Nullam sit amet enim consequat, pulvinar ipsum a, fermentum augue. Maecenas id condimentum ligula, in feugiat lectus. Fusce ultricies elit vel egestas tincidunt. Cras et egestas eros. Suspendisse potenti. Donec orci erat, facilisis id augue sed, tincidunt mattis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         </p>
         <p> 
            Integer malesuada nisi elit, in tincidunt dui pulvinar vitae. Suspendisse aliquam nibh sed mi sollicitudin pellentesque. Fusce posuere dui id nisi scelerisque, eu lobortis enim maximus. Donec ac mi sed quam rutrum faucibus eu eget ligula. Pellentesque aliquam iaculis erat et egestas. Suspendisse pretium dapibus volutpat. Mauris malesuada nibh at pellentesque pharetra. Quisque viverra elementum purus. Duis posuere magna id ante vehicula aliquet.
        </p>`
};

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
            <meta name="view-port" content="width=device-width">
            <link type="text/css" rel="stylesheet" href="ui/style.css"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3 class="heading">
                    ${heading}
                </h3>
                <div class="date">
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return template;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname,  'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
   res.sendFile(path.join(__dirname,  'ui', 'article-three.html'));
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
