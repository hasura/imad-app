console.log('Loaded!');
 window.onload = initAll;
function initAll()
{ 
    document.getElementById("Lincoln").onclick = saySomething;
 
    document.getElementById("kennedy").onclick = saySomething;
  
    document.getElementById("NIxon").onclick = saySomething;
}

function saySomething()
{
    alert("hii");
}