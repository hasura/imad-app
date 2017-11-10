var express=require('express');
var morgan=require('morgan');
var path=require('path');
app.get('/',function(req,res){
    res.sendFile(path,join(__dirname,'ui','index.html'));
});
app.get('ui/style.css',function(req,res){
    res.sendFile(path,join(__dirname,'ui','style.css'));
});