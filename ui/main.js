//console.log('Loaded!');

//var element = document.getElementById('main-text'
///);//

//element.innerHTML = 'new value';
//var img = document.getElementById('madi');
//var marginLeft = 0;
//function moveRight (){
   // marginLeft = marginLeft + 10;
   // img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick = function (){
   // var interval = setInterval(moveRight, 50);
//};//

var button= document.getElementById('counter');
//var counter = 0;
button.onclick = function (){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE){
        if (request.status === 200){
           var counter = request.responseText;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}
}
},
request.open('GET', 'http://u034senthil.imad.hasura-app.io/counter', true);
request.send(null);
};