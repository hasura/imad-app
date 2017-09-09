//counter code
var counter=0;

var button = document.getElementById('counter');
button.onclick = function() {
  
  //make a request to get the counter value
  
  //extract the counter value into a variable
  
  //render the counter value in the correct span
  counter++;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};
