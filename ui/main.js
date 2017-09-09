console.log('Loaded!');

//moving the image whenn click on it

var img=document.getElementById("madi");
img.onclick = function() {
    var x=100;
  img.style.marginLeft= x+"px";  
  x=x+100;
};