console.log('loaded!');
window.onload = choosePic; 
function choosePic() {
    
        var myPix= new Array("https://lh3.googleusercontent.com/QDRqYwM1-3DBja34Kf94n0pD4H_XzZWTLukv5sLub0Y5lRW2ZcN_YsXh6V_BjMwZC2kbLjEXhs2_R43I05RccpZ9jBkkkiO4gPEhISIkQlgPmI1TGtrxt9Z7xUp3Ylak5SwX5Eg5UzYdEsh10NCQZ6Qz2hodrsu_1tB7NXPTejbRHejcDavBrwoCj26DZG5ENMXPb5gAFEtrERQYXTgNzasG8C-m8Auc4eamci5VY4CspqOXxjURta_t_OJV2iw4XEDsiIa5XbnNdaL-eh28ch7y5JKBBa4XIERIeh1dDPybi5KFMLCcpQXv0yIG4_7z8tQzZ1CAHJsRLy3bgRruvy2Y-jWCwIBwRBkdyC9N1PmeXhOnccxCJ6elj02TwezzhPqxdBWerJB_ALXMZrrTAR8ZovBlV1OkxVauEoju9IRvSsrbW0LnWJWEiyjXO6gBS2vtgTCLTi-EWNSg5dY5P71d4xLqertq05o_Fo8nionubWtNqoDdC46NJycoHDLwIoboQSYwCjjXIBmm5BxTgDmftK0lqx8cUyqBngFyXnS_dc9xzw3rAbWokLmmHgiJ3-20J8NSYYvv3BUp1kBbpJKJweDkEtfIg6mHQg=w763-h949-no","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");
    var randomNum = Math.floor((Math.random() * myPix.length));
document.getElementById("myPicture").src = myPix[randomNum];

 var youPix= new Array("https://3.imimg.com/data3/OL/CG/MY-1054197/832_834_pink-black-2-500x500.jpg","http://cdn.fcglcdn.com/brainbees/images/products/438x531/620138a.jpg","https://image.smythstoys.com/original/desktop/151922_7.jpg");

var randomNu = Math.floor((Math.random() * youPix.length));
document.getElementById("youPicture").src = youPix[randomNu];


 var thatPix= new Array("https://photos.google.com/photo/AF1QipMkfX6HIqjvlnKonkmPDRAY3OFigD32LYY-GeVT");

var randomN = Math.floor((Math.random() * thatPix.length));
document.getElementById("thatPicture").src = thatPix[randomN];
}


 