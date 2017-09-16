//Counter Code
var counter = 0;

function clicked()
{
    console.log("hi");
    counter++;
   
 var span = document.getElementById('nooftimes')
 span.innerHTML = counter.toString();
}
