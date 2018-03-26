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
    switch(this.id)
    {
        case "Lincoln":
            alert("four score and seven years ago..");
    }
}