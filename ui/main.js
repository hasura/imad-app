var button=document.getElementById('counter');
var counter=0;
alert("hello");
button.onClick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}