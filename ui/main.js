console.log('Loaded!');

var img = document.getElementById('drago');
var leftmarg = 0;
function moveright(){
    leftmarg = leftmarg + 1;
    img.style.marginLeft = leftmarg + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveright, 50);
};