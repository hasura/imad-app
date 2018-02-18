console.log('Loaded!');

//change contents of an element
var element= document.getElementById('main-text');
element.innerHTML="New Value";


//hiding the image
var picture1= document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft+10;
    img.style.marginLeft = marginLeft + 'px';
}
picture1.onClick = function(){
    var interval= setInterval(moveRight, 100);
}