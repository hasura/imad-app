console.log('loaded!');
window.onload = choosePic; 
function choosePic() {
    
        var myPix= new Array("https://3.imimg.com/data3/OL/CG/MY-1054197/832_834_pink-black-2-500x500.jpg","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");
    var randomNum = Math.floor((Math.random() * myPix.length));
document.getElementById("myPicture").src = myPix[randomNum];

 var youPix= new Array("https://3.imimg.com/data3/OL/CG/MY-1054197/832_834_pink-black-2-500x500.jpg","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");

var randomNu = Math.floor((Math.random() * youPix.length));
document.getElementById("youPicture").src = youPix[randomNu];


 var thatPix= new Array("https://3.imimg.com/data3/OL/CG/MY-1054197/832_834_pink-black-2-500x500.jpg","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");

var randomN = Math.floor((Math.random() * thatPix.length));
document.getElementById("thatPicture").src = thatPix[randomN];
}

window.onload = initImages;
function initImages() {
for ( var i=0; i<document.images.length; i++) {
     document.images[i].ondbclick = newWindow;
 
    } }
    
 function newWindow() {
     var imgName = "images/" + this.id + ".jpg";
     var imgWindow = window.open(imgName,"imgWin", "width=320, height=240, scrollbars");
     
 }
 