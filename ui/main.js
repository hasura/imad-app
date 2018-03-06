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
            var names = request.responseText;
            names=JSON.parse(names);
            var list='';
            for (var i=0;i<names.length;i++){
                list += '<li>'+names[i]+'</li>';
            }
            
            var ul=document.getElementById('namelist');
            ul.innerHTML=list;
            }
        }
        
        //not done yet
    };

    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    console.log(username);
    console.log(password);
    
    request.open('POST','http://parmeetasi.imad.hasura-app.io/login',true);
    request.send(JSON.stringify({username: username, password: password}));
};