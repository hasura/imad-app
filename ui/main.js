console.log('Loaded!');

//Changing the text of the home page

var element = document.getElementById('main');

element.innerHTML = 'Changes in the sever,but u can get the source codes in gitHub'

//Moving the madi image

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
}