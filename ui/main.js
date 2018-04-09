console.log('loaded!');
window.onload = choosePic; 
function choosePic() {
    
        var myPix= new Array("https://3.imimg.com/data3/OL/CG/MY-1054197/832_834_pink-black-2-500x500.jpg","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");
    var randomNum = Math.floor((Math.random() * myPix.length));
document.getElementById("myPicture").src = myPix[randomNum];

 var youPix= new Array("https://3.imimg.com/data3/OL/CG/MY-1054197/832_834_pink-black-2-500x500.jpg","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");

var randomNu = Math.floor((Math.random() * youPix.length));
document.getElementById("youPicture").src = youPix[randomNu];

var thePic = 0;
var thatPix = new Array("https://3.imimg.com/data3/OL/CG/MY-1054197/832_834_pink-black-2-500x500.jpg","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");

document.getElementById("prevLink").onclick = processPrevious;
     document.getElementById("nextLink").onclick = processNext;
    }
    
 
function processPrevious() {
     if (thePic === 0) {
        thePic = thatPix.length;
     }
     thePic--;
     document.getElementById("thatPicture").src = thatPix[thePic];
     return false;
}

function processNext() {
     thePic++;
     if (thePic == thatPix.length) {
        thePic = 0;
     }
     document.getElementById("thatPicture").src = thatPix[thePic];
     return false;
}