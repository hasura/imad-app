//Counter Code

var button = document.getElementById("clicking");
var counter = 0;

button.onclick = function() {
 
// console.log("hi");
 counter=counter+1;
 var span = document.getElementById("nooftimes");
 span.innerHTML=counter.toString();
};

/*function clicked()
{
    console.log("hi");
    counter++;
    document.write(counter);
 var span = document.getElementById('no_of_times');
 span.InnerHTML = counter.toString();
}
console.log("hi");*/