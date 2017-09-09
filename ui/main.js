console.log('Loaded!');

//moving the image whenn click on it

var img=document.getElementById("madi");
var marginLeft =0;
function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function() {
    var interval = setInterval(moveRight,100);
};