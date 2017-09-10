
function loginForm() {
    var region = document.getElementById('user-session-area');
    region.innerHTML = `
        <h3>Login into your account</h3>
        <input type="text" id="username" placeholder="Username">
        <input type="text" id="password">
        <br>
        <button id="login">Login</button>
        <button id="register">Register</button>
    `;
}

loginForm();

function loggedForm() {
    var region = document.getElementById('user-session-area');
    region.innerHTML = `
        <h3> Hi </h3>
        <a href="/logout">Logout</a>
    `;
}

var login = document.getElementById('login');
login.onclick = function() {
   
   var request = new XMLHttpRequest();
  
  
  //capture the response and store in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200) {
              checkLogin();
          } else if(request.status === 403) {
              alert('Username/Password is incorrect!');
          } else if(request.status === 500) {
              alert('Something went wrong on the server side.');
          }
      }
  };
  
  //make a request
   var username = document.getElementById('username').value;  
   var password = document.getElementById('password').value;  
  
  request.open('POST', 'http://ssttrinath.imad.hasura-app.io/login', true);
  request.setRequestHeader('Content-Type', 'application/json');
  console.log(username);
  console.log(password);
  request.send(JSON.stringify({username: username, password: password}));
};

var register = document.getElementById('register');
register.onclick = function() {
   var request = new XMLHttpRequest();
  
  
  //capture the response and store in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200) {
              console.log('user is successfully registered.');
              alert('Registration successfull.');
          } else if(request.status === 500) {
              alert('Problem at the server side.');
          } 
      }
  };
  
  //make a request
   var username = document.getElementById('username').value;  
   var password = document.getElementById('password').value;  
  
  request.open('POST', 'http://ssttrinath.imad.hasura-app.io/create-user', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({username: username, password: password})); 
};

function checkLogin() {
    var request = new XMLHttpRequest();
  
  
  //capture the response and store in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200) {
              if(request.responseText === 'yes') {
                  loggedFrom();
              } else if(request.responseText === 'no') {
                  loginForm();
              }
          } 
      }
  };
  
  //make a request
  request.open('GET', 'http://ssttrinath.imad.hasura-app.io/check-login', true);
  request.send(null);  
}
