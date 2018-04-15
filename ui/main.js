console.log('loaded!');
 
window.onload = choose; 
function choose() {
    for(var i=0; i<document.iamges.length; i++)
    {
        document.images[i].ondbclick = newWindow;
    }
}

function newWindow() {
    var imgName ="images/" +this.id + "" ;
    var imgWindow = window.open(imgName, "imgWin", "width=320, height=240, scrollbars=no");
    
}
 