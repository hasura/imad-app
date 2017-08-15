// counter code

var bittuon = document.getElementById('counter');
var counter = 0;
buton.onclick=function () {
  
  // make a req to counter end point
  
  // capture a response and store it in a variable

  // rendee the variable in the correct span 
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};