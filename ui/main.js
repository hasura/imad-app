//Counter Code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //Create a request object
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if(request.status == 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHtml = counter.toString();
          }
      }  
    };
    //Make a request
    request.open('GET','http://www.google.com',true);
    request.send(null);
};    
    
 