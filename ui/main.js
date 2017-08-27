
function displayUsername (username) {
    var loginArea = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout">Logout</a>
    `;
    document.getElementById('login_area').innerHTML = loginArea;
}

function verifyLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                displayUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}
function loadLoginForm () {
    var loginHtml = `
        <h3>Login/Register to unlock awesome features</h3>
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" />
        <br/><br/>
        <input type="submit" id="login_button" value="Login" />
        <input type="submit" id="register_button" value="Register" />
        `;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('login_button');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Success!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              verifyLogin();
          }  
          // Not done yet
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var register = document.getElementById('register_button');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        register.value = 'Registering...';
    
    };
}

displayMembers = function(){
	var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
    request.onreadystatechange = function () {
		if (request.readyState === XMLHttpRequest.DONE) {
			  // Take some action
			  if (request.status === 200) {
				var names = request.responseText;
				names = JSON.parse(names);
				alert('User list available');
				var col = [];
				for (var i = 0; i < names.length; i++) {
					for (var key in names[i]) {
						if (col.indexOf(key) === -1) {
						 col.push(key);
						}
					}
				} // extract Header information
				var table = document.createElement("table");

                // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
        
                var tr = table.insertRow(-1);                   // TABLE ROW.

                for ( i = 0; i < col.length; i++) {
                    var th = document.createElement("th");      // TABLE HEADER.
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }
                for ( i = 0; i < names.length; i++) {

                    tr = table.insertRow(-1);

                    for (var j = 0; j < col.length; j++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = names[i][col[j]];
                    }
                }
                var divContainer = document.getElementById("table_data");
                divContainer.innerHTML = "User List";
                divContainer.appendChild(table);            
			  }
		      else {
				  alert('Could not register the user');
			  }
		}
    };
        
        // Make the request
    request.open('GET', '/verify', true);
    request.send(null);  
};
// lets get these going
verifyLogin();
displayMembers();
