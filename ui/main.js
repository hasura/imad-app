var counter=0;
var button=document.getElementById('button');
button.onclick=function(){
    counter++;
  var count=documnet.getElementById('count');
  count.innerHTML=counter.toString();
}