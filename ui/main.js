console.log('Loaded!');

var img = document.getElementById('drago');
var leftmarg = 0;
var rightmarg = 0;
var count = 0;
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
            rightmarg = 0;
        }
    }
    else
    {
        leftmarg = 0;
        rightmarg = 0;
    }
}
img.onclick = function(){
    var interval = setInterval(moveDrago, 1);
};

function Sound(source,volume,loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}
var foo=new Sound('/ui/Raptor.mp3',100,true);
foo.start();
foo.stop();
foo.start();
foo.init(100,false);
foo.remove();