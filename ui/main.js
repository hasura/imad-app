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

var btn=document.getElementById('counter--button');
btn.onclick=function(){

    //create a request object
    var request=new XMLHttpRequest();

    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState ===  XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200){
                 var counter = request.responseText;
                 var span=document.getElementById('count');
                 span.innerHTML = counter.toString();
                
            }
        }
        
        //not done yet
    };

    request.open('GET','http://parmeetasi.imad.hasura-app.io/counter',true);
    request.send(null);
};









//submit name
var nameInput= document.getElementById('name');
var name= nameInput.value;
var submit= document.getElementByID('submit--btn');
submit.onclick = function(){
    //make a request to the server and send the name
    //capture a list of names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for (var i=0;i<names.length;i++){
        list += '<li>'+names[i]+'</li>';
    }
    
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};