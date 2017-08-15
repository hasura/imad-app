console.log('Loaded!');
var img=document.getElementById('nol')
img
var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function() {
   var interval=setInterval(moveRight,50);
}
var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        if(request.status===200)
        {
    var counter=request.responseText;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
        }
    }
 };
 request.open('GET','http://aravindan2695.imad.hasura-app.io/counter',true);
 request.send(null);
 };