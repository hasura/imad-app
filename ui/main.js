console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerText = 'New Value';

var img = document.getElementById('madi');
img.onclick = function () {
  img.style.marginleft = '100px';  
};