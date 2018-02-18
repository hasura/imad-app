console.log('Loaded!');

//change contents of an element
var element= document.getElementById('main-text');
element.innerHTML="New Value";


//hiding the image
var picture1= document.getElementById('madi');

picture1.onClick = function(){
picture1.src=" ";
}