console.log('Loaded!');

var element=document.getElementById('a');

element.innerHTML='okay';

var img=document.getElementById('c').src;
var oldimg=document.getElementById('b');
oldimg.innerHTML=img;