/*console.log('Loaded!');

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
*/

//Counter Code
var counter=document.getElementById('counter');
var count=0;
counter.onclick=function(){
 
 count+=1;
 var visitors=document.getElementById('count');
 visitors.InnerHTML=count.toString();
};