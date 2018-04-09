console.log('loaded!');
window.onload = choosePic;
function choosePic() {
    
        var myPix= new Array("https://3.imimg.com/data3/OL/CG/MY-1054197/832_834_pink-black-2-500x500.jpg","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");
    
var randomNum = Math.floor((Math.random() * myPix.length));
document.getElementById("myPicture").src = myPix[randomNum];
    }
    
  
 window.onload = initLinks;
var youPix = new Array("http://freepngimg.com/download/technology/35661-2-robot-transparent.png","https://img00.deviantart.net/baa5/i/2008/185/c/f/xcc_900_terminator_001_by_selficide_stock.png","http://freepngimg.com/download/technology/35747-4-robot-transparent-background.png");
var thisPic = 0;

function initLinks() {
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() {
    if(thisPic === 0) {
        thisPic = youPix.length;
    }
    thisPic--;
    document.getElementById("youPicture").src = youPix[thisPic];
    return false;
} 

function processNext() {
   thisPic++ ;
      if (thisPic === youPix.length)
         {
             thisPic = 0;
         }
    document.getElementById("youPicture").src = youPix[thisPic];
    return false;
} 

