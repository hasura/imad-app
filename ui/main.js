console.log('Loaded!');
//this is for changing the content of index.html
var element= document.getElementById('main-text');
element.innerHTML='vaishnavi';

//move the image
var img= document.getElementById('madi');
//on click is an executer function
img.onclick= function()
{
    img.style.marginLeft='100px';
}