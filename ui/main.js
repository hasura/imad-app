//counter code

var button = document.getElementById('counter');
button.onclick = function() {
  
  //create a new request
  var request = new XMLHttpRequest();
  
  
  //capture the response and store in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200) {
              var counter = request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }
  };
  
  //make a request
  request.open('GET', 'http://ssttrinath.imad.hasura-app.io/counter', true);
  request.send(null);
  
};


submit.onclick = function() {
   
   var request = new XMLHttpRequest();
  
  
  //capture the response and store in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200) {
              var names = request.responseText;
              names = JSON.parse(names);
              var ul = document.getElementById('list');
              
              for(var i=0;i<names.length;i++) {
                  names[i] = '<li>' + names[i] + '</li>';
              }
              
              ul.innerHTML=list;
          }
      }
  };
  
  //make a request
  request.open('GET', 'http://ssttrinath.imad.hasura-app.io/submit-name?name='+name, true);
  request.send(null);
   
   var nameInput = document.getElementById('name');  
   var name = nameInput.value;
   
};
