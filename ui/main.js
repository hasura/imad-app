var button=document.getElementById('counter');
var counter=0;
button.onclick=function(req,res){
    req=new XMLHttpRequest();
    req.onreadystatechange=function(){
        if (req.readyState==XMLHttpRequest.DONE){
            if (req.status==200)
                var counter=req.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
}
};
};
request.open('GET','http://jyothirajub.imad.hasura-app.io/counter',true);
request.send(res);