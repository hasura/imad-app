console.log('Loaded!');
//this is for changing the content of index.html
var element= document.getElementById('main-text');
element.innerHTML='vaishnavi';

//move the image
var img= document.getElementById('madi');
var marginLeft = 0;
//on click is an executer function

function moveRight() // when u click on the image, every 100 ms the moveRight funtion will be called.
{
    marginLeft= marginLeft+1;
    img.style.marginLeft= marginLeft +'px'; 
}
img.onclick= function()
{
   // img.style.marginLeft='100px'; 
   //when u click on the image, then it will increase the left margin to the left, so it will feel like the image is moving to the right a little.
   
   
   var interval= setInterval(moveRight,50);//this means, every 100ms apply the moveright function
}