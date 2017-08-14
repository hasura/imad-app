var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
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
}
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

app.get('/article-one',function ( req, res) {
	res.send( createTemplate(articleOne));
});
app.get('/article-two',function ( req, res) {
	res.sendFile(path.join(__dirname, 'ui','article-two.html'));
});

app.get('/article-three', function ( res, req){
	res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));

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
