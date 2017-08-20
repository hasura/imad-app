var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
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
            
            <br><br>
            Thank You.
        </p>`
    },
    'article-two': {
      title: ' Article two | Saka Sai Trinath',
      heading: 'Article Two',
      date:' Aug 20, 2017',
      content: 
        `<p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mollis nibh. Mauris ac nunc ultricies erat tempor rutrum. Sed mauris nibh, venenatis ut pharetra eget, aliquam id tellus. Ut accumsan, nulla sit amet fringilla bibendum, nisl orci convallis sem, non consectetur justo erat a dui. Donec rhoncus odio ligula, eu dictum diam ultrices sit amet. Praesent venenatis orci at scelerisque vulputate. Mauris nec est congue, sagittis urna quis, finibus est. Sed rutrum fringilla nunc id rutrum.
        </p>
        <p>    
            Vestibulum commodo nec magna a maximus. Donec ut magna ac lectus blandit tristique. Suspendisse eget nulla aliquam mi pharetra gravida eu eget felis. Vivamus nibh urna, porta sit amet diam at, dignissim sodales eros. Sed sed commodo augue, vel elementum enim. Curabitur sit amet orci augue. Maecenas vestibulum fermentum sem in interdum. Phasellus viverra egestas velit id pellentesque.
        </p>    
        <p>
            Nulla eleifend neque id rutrum venenatis. Vestibulum eu vehicula diam. Aenean tristique elit et dui bibendum vestibulum. Mauris vitae mi semper libero laoreet vestibulum id in risus. Curabitur euismod turpis ac urna gravida suscipit. Proin porta nisi non gravida sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed volutpat risus eu ipsum bibendum aliquam.
         </p>
         <p> 
            Nulla eleifend neque id rutrum venenatis. Vestibulum eu vehicula diam. Aenean tristique elit et dui bibendum vestibulum. Mauris vitae mi semper libero laoreet vestibulum id in risus. Curabitur euismod turpis ac urna gravida suscipit. Proin porta nisi non gravida sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed volutpat risus eu ipsum bibendum aliquam.
                <br>
                <br>
                Thank you.
        </p>`
            
    },
    'article-three': {
      title: ' Article three | Saka Sai Trinath',
      heading: 'Article three',
      date:' Aug 23, 2017',
      content: 
        `<p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet felis bibendum, rhoncus diam sed, porttitor dolor. Aenean molestie, justo a eleifend suscipit, ligula quam interdum urna, eget efficitur nulla ligula a dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id cursus lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec nibh nibh. Ut turpis dui, facilisis malesuada tempor et, malesuada eu leo. Morbi auctor volutpat molestie. Maecenas ipsum elit, fermentum eget finibus quis, mollis tristique justo. Ut consectetur quam id nibh convallis varius. Donec feugiat sapien felis, ac finibus risus dictum nec. Phasellus vitae luctus elit. Nulla fermentum, risus id volutpat laoreet, nulla ligula venenatis eros, quis dignissim mauris nunc eu arcu. Nulla eget rhoncus lectus.
            </p>
            <p>    
                Fusce elementum id erat at volutpat. Pellentesque eleifend diam a erat accumsan venenatis. Aliquam vitae blandit ligula, sed malesuada ipsum. Fusce congue eget quam eu lobortis. Cras dapibus tincidunt ipsum et lacinia. Vestibulum aliquam non dui sit amet euismod. Nunc aliquam risus dolor, quis consectetur diam bibendum eget.
            </p>    
            <p>
                Pellentesque tincidunt ut turpis quis vestibulum. Ut tincidunt ultrices sapien, vel aliquam elit luctus quis. Vestibulum volutpat eros nec dui hendrerit varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed suscipit lectus non enim porta maximus. Quisque tincidunt congue ligula vel tristique. Nullam pharetra erat ut sem fringilla ultricies. Fusce eu pulvinar nisi, sed hendrerit neque.
             </p>
             <p> 
                Aliquam nec velit tempor, faucibus quam eget, finibus justo. Fusce ornare odio ac suscipit consequat. Maecenas et ante sed lectus luctus dapibus tristique eget nunc. Donec tempor nunc id dictum tristique. Quisque eleifend condimentum orci. Integer elementum ornare malesuada. Aenean viverra diam sed eros scelerisque, sit amet molestie ex ultrices. Ut eget risus id nunc consectetur iaculis. Vivamus sed ex libero. Fusce id elementum enim, in consectetur sem.<br><br>
                Thank You.
            </p>`
    }
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

app.get('/:articleName', function(req, res){
    //aticleName create the object as per the url typed by user.
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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
