console.log('Loaded!');

//change contents of an element
//var element= document.getElementById('main-text');
//element.innerHTML="New Value";


//hiding the image
//var img= document.getElementById('madi');
//var marginLeft=0;
//function moveRight(){
  //  marginLeft= marginLeft+10;
    //img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick = function(){
  //  var interval= setInterval(moveRight, 100);
//};


//create the counter button and making ajax call
//var btn=document.getElementById('counter--button');



//------------------------------------------------------------------------------
// LOGIN PAGE

//submit username/password to login
var submit= document.getElementById('submit_btn');
submit.onclick=function(){

    //create a request object
    var request=new XMLHttpRequest();

    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState ===  XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200){
          //capture a list of names and render it as a list
            console.log('user logged in');
            alert('Logged in successfully');
            }else if(request.status === 403){
                alert('username/password is incorrect');
            }else if(request.status === 500){
                alert('Something went wrong on the server');
            }
        }
        
        //not done yet
    };

    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    console.log(username);
    console.log(password);
    
    request.open('POST','http://parmeetasi.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};