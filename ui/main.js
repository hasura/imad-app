console.log('Loaded!');

//change contents of an element
//var element= document.getElementById('main-text');
//element.innerHTML="New Value";


//hiding the image
//var img= document.getElementById('madi');
//var marginLeft=0;
//function moveRight(){
  //  marginLeft= marginLeft+10;
    //img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick = function(){
  //  var interval= setInterval(moveRight, 100);
//};



//counter button
var counter=0;
var btn=document.getElementById('counter--button');
btn.onclick=function(){
    counter++;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString();
};