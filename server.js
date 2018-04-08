var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool= require('pg').Pool;
var crypto= require('crypto');
var bodyParse= require('body-parser');
var session = require('express-session');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/guess', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'guess.html'));
});
app.get('/app', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.html'));
});
app.get('/ui/guess.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'guess.css'));
});
app.get('/ui/guess.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'guess.js'));
});
app.get('/ui/app.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.css'));
});
app.get('/ui/app.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/download.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download.png'));
});

var config ={
    user:'dhirajjaiswal96',
    database:'dhirajjaiswal96',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
}
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

app.use(bodyParser.json());
app.use(session({
secret: 'someRandomSecretValue',
cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui','index.html'));
});

function hash (input,salt) {
//How to create a hash?
var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}

app.get('/hash/:input', function(req, res) {
var hashedString = hash(req.params.input,'this-is- some-random- string');
res.send(hashedString);
});

app.post('/create-user', function (req, res) {

//username,password
//{&quot;username&quot;: &quot;amit&quot;, &quot;password&quot;: &quot;password&quot;}
//JSON
var username = req.body.username;
var password = req.body.password;
var salt = crypto.randomBytes(128).toString('hex');
var dbString = hash(password, salt);
pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString],
function(err, result){
if(err){
res.status(500).send(err.toString());
}
else{
res.send('User successfully created:' + username);
}
});

});

app.post('/login', function (req, res) {

var username = req.body.username;
var password = req.body.password;

pool.query('SELECT * FROM "user" WHERE username = $1' [username], function(err, result){
if(err){

res.status(500).send(err.toString());
}
else{
if(result.rows.length === 0){
res.send(403).send('username/password is invalid');
}
else{
//Match the password
var dbString = result.rows[0].password;
var salt = dbString.split(';')[2];
var hashedPassword = hash(password, salt);
//creating a hash based on password submitted with original salt
if(hashedPassword === dbString){
//set the session value
req.session.auth = {userId: result.rows[0].id};
//set cookie with session id
//Internally on server side, it maps the session id to a object
//{ auth: {userId }}

res.send('credentials correcr!');

}
else{
res.send(403).send('username/password is invalid');
}



}

}
});

});

app.get('/check-login',function (req, res) {
if(req.session && req.session.auth && req.session.auth.userId)
{
res.send('You are logged in:' + req.session.auth.userId.toString());
}
else{
res.send('You are not logged in!!');
}
});

app.get('/logout', function (req, res){
delete req.session.auth;
res.send('logged out');
});

var pool = new Pool(config);
app.get('/test-db', function (req, res){
//make a select response
//return the response with the results
pool.query('SELECT * FROM test', function(err, result){

if(err){
res.status(500).send(err.toString());
}
else{
res.send(JSON.stringify(result));
}

});
});

var counter = 0;
app.get('/counter', function (req, res){
counter = counter + 1;
res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req,res){//url:submit- name?name =xxx

var name = req.query.name;
//get the name from request object

names.push(name);

//JSON JAVASCRIPT OBJECT NOTATION
res.send(JSON.stringify(names));//TODO


});

app.get('/article-one', function (req, res) {
res.sendFile(path.join(__dirname, &#39;ui&#39;, &#39;article-one.html&#39;));
});

app.get('/article-two', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui','style.css'));
});

app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui','main.js'));
});

// Do not change port, otherwise your app won&#39;t run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
console.log(`IMAD course app listening on port ${port}!`);
});








