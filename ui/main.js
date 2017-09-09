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

var submit = document.getElementbyId('submit_btn');
submit.onclick = function() {
   
   var request = new XMLHttpRequest();
  
  
  //capture the response and store in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200) {
              var names = request.responseText;
              names = JSON.parse(names);
              var list='';
              
              for(var i=0;i<names.length;i++) {
                  list += '<li>' + names[i] + '</li>';
              }
              var ul = document.getElementById('namelist');
              ul.innerHTML=list;
          }
      }
  };
  
  //make a request
   var nameInput = document.getElementById('name');  
   var name = nameInput.value;
  
  request.open('GET', 'http://ssttrinath.imad.hasura-app.io/submit-name?name='+name, true);
  request.send(null);
   
  
   
};
