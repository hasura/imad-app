console.log('Loaded!');
var element=document.getElementById('maintext');
element.innerHTML='New Value';
var img=document.getElementById('madi');
var marginleft = 0;
function moveright(){
    marginleft = marginleft + 10;
    img.marginleft = marginleft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveright,100);
};