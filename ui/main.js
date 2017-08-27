console.log('Loaded!');

//To move MADI
var img = document.getElementById("MADI");
var marginLeft = 0;
function moveRight(){
  marginLeft += 5;
  img.style.marginLeft = marginLeft+"px";
  }
img.onclick = function(){
    var Interval = setInterval(moveRight , 100);
};