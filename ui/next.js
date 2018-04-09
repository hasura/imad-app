console.log('loaded!');
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
             thisPic=0;
         }
    document.getElementById("youPicture").src = youPix[thisPic];
    return false;
} 
