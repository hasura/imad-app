console.log('Loaded!');

//To move MADI
var img = document.getElementById("MADI");
var marginLeft = 0;
function moveRight(){
  marginLeft += 1;
  img.style.marginLeft = marginLeft+"px";
}
img.onclick = function(){
    var Interval = setInterval(moveRight , 50);
};