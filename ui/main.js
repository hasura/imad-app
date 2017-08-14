console.log('Loaded!');

//Changing the text of the home page

var element = document.getElementById('main');

element.innerHTML = "Changes in the sever,but u can get the source codes in gitHub"

//Moving the madi image

var img = document.getElementById('madi');

img.onclick = function() {
    img.style.marginLeft = '100px';
}