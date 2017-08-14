var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one' : {
    	title: 'The Introduction | Web Articles',
    	heading: 'The Introduction',
    	content:`
    	 		<p>
    				New things can be added to this article...
    			</p>
    			<p>
    				Only some files can be added to this article that can be human readable rest of the files are for machine
    			</p>
    			<p>
    				Machine can read various type of file that are written by humans...<br />Continues in next article...
    			</p>
    		`
    },
    'article-two' : {
        title: 'The Chapter | Web Articles',
    	heading: '|| The Chapter ||',
    	content:`
    	 		<p>
				So Machines can read various types files <em>e.g HTML , CSS , JavaScript , C , C++ , JAVA</em> <br />
				but there is a problem to this, Machines can't read these files directly, to do so it needs to convert these files into machine codes and then it executes the files
			</p>`
    }
};
function createTemplate(data){
	var title = data.title;
	var heading = data.heading;
	var content = data.content;

		var htmlTemplate =`
			<html>
			<head>
				<title>
			    	${title}
				</title>
				<meta name="viewport" content="width_-device-width , initial-scale=1"/>
				<link rel="stylesheet" type="text/css" href="/ui/style.css"/>
			</head>
			<body>
				<div class="container_one">
					<div>
						<h1>
							${heading}
						</h1>
					</div>
					<hr style="color: red">
					<div class="holder_one">
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

app.get('/:articleName',function ( req, res) {
    var articleName = req.param.articleName;
	res.send( createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function ( req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function ( req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
