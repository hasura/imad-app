console.log('Loaded!');

//change contents of an element
//var element= document.getElementById('main-text');
//element.innerHTML="New Value";


//hiding the image
var img= document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft+10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval= setInterval(moveRight, 100);
}



//counter button
counter=0;
var btn=document.getElementById('counter--button');
function setText(){
    var lol=document.getElementById('count');
    lol=counter;
}

btn.onclick=function(){
    counter++;
    setText();
}