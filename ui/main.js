//Counter Code

var button = document.getElementById('clicking');
var counter = 0;

document.getElementById('clicking').onclick = function() {
 
// console.log("hi");
 counter++;
 var span = document.getElementById('nooftimes');
 span.innerHTML=counter.toString();
};
/*
function clicked()
{
    console.log("hi");
    counter++;
   // document.write(counter);
 var span = document.getElementById('nooftimes')
 span.innerHTML = counter.toString();
}
console.log("hi");*/