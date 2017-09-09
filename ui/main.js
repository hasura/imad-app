console.log('Loaded!');

//moving the image whenn click on it

var img=document.getElementById("madi");
function moveRight() {
    marginLeft = marginLeft+10;
    img.style.margnLeft = marginLeft + "px";
}
img.onclick = function() {
    var interval = setInterval(moveRight,100);
};