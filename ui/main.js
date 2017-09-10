//Counter Code

/*var button = document.getElementById('button');
var counter = 0;

button.onclick = function() {
 
 
 counter=counter+1;
 var span = document.getElementById('no_of_times');
 span.InnerHTML = counter.toString();
};*/

function clicked()
{
    counter++;
    document.write(counter);
 var span = document.getElementById('no_of_times');
 span.InnerHTML = counter.toString();
}
console.log("hi");