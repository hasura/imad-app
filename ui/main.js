console.log('Loaded!');

//alert('hi how r u???');

var img = document.getElementById('image');
var mov=0;
function movr() {
    mov=mov + 1;
    img.style.marginLeft=mov+'px';
}
img.onclick = function(){
    var ele = setInterval(movr,50);
};