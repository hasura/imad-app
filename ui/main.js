console.log('Loaded!');


var img = document.getElementById('image');
var mov=0;
function movr() {
   marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft+'px';
}
img.onClick = function(){
    var ele = setInterval(movr,50);
};