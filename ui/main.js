console.log('Loaded!');

var img = document.getElementById('drago');
var leftmarg = 0;
var rightmarg = 0;
function moveDrago(){
    if(leftmarg < 10){
        leftmarg = leftmarg + 1;
        img.style.marginLeft = leftmarg + 'px';
    }
    else if (leftmarg >= 10)
    {
        rightmarg = rightmarg + 1;
        img.style.marginRight = rightmarg + 'px';
        if(rightmarg >= 10)
        {
            leftmarg = 0;
        }
    }
    else
    {
        leftmarg = 0;
        rightmarg = 0;
    }
}
img.onclick = function(){
    var interval = setInterval(moveDrago, 50);
};