
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
   
   var request = new XMLHttpRequest();
  
  
  //capture the response and store in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200) {
              console.log('user logged in.');
              alert('Loggedin successfully.');
          } else if(request.status === 403) {
              alert('Username/Password is incorrect!');
          } else if(request.status === 500) {
              alert('Something went wrong on the server side.');
          }
      }
  };
  
  //make a request
   var username = document.getElementById('username');  
   var password = document.getElementById('password');  
  
  request.open('POST', 'http://ssttrinath.imad.hasura-app.io/login', true);
  request.setRequestHeader('Content-Type', 'application/json');
  console.log(username);
  console.log(password);
  request.send(JSON.stringify({username: username, password: password}));
   
  
   
};
