app.get('ui/style.css',function(req,res){
    res.sendFile(path,join(__dirname,'ui','style.css'))
});