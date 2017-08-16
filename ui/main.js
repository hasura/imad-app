console.log('Loaded!');


var img = document.getElementById('image');
var marginLeft=0;
function movr() {
   marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function(){
    var ele = setInterval(movr,50);
};