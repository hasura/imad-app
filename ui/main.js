console.log('Loaded!');

// the text of the main-text div
var ele = document.getElementById('main-text');

ele.innerHTML = 'New Value';

// move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
  marginLeft = marginLeft+1;
  img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {

  var interval = setInterval(moveRight, 50);
};
