//Counter Code
var button = document.getElementById('counter');
button.onclick = function() {
    //render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString(); 
};