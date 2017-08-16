console.log('Loaded!');

alert('hi how r u???');

var img = document.getElementById('image');
var mov=0;
function movr() {
    mov=mov + 10;
    img.style.mov=mov+'px';
}
img.onClick = function(){
    var ele = setInterval(movr,50);
};