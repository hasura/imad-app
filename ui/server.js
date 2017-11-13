var express=require('express');
var morgan=require('morgan');
var path=require('path');
var app=express();
app.use(morgan('combined'));
app.get('/',function(req,res){
    res.sendFile(path,join(__dirname,'ui','index.html'));
});
app.get('/ui/style.css',function(req,res){
    res.sendFile(path,join(__dirname,'ui','style.css'));
});
var port=8080;
app.listen(8080,function(){
    console.log('IMAD is listnening to  port "${port}"');
});