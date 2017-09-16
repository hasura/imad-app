//Counter Code
function clicked()
{
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Take Action
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('nooftimes');
                span.innerHTML = counter.toString();
            }
    };
    
    //Make the request
    request.open('GET','http://apoorvakashyap54.imad.hasura-app.io/counter',true);
    request.send(null);
}
