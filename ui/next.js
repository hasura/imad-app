console.log('loaded!');
window.onload = initAll;
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


var slideInde = 1;
showSlides(slideInde);

// Next/previous controls
function nextSlides(m) {
  showSlides(slideInde += nm);
}

// Thumbnail image controls
function nextSlide(m) {
  showSlides(slideIndex = m);
}

function howSlides(m) {
  var i;
  var slides = document.getElementsByClassName("youSlides");
  var dots = document.getElementsByClassName("nextdot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideInde-1].style.display = "block"; 
  dots[slideInde-1].className += " active";
}

window.onload = initAll;

function initAll() {
    document.getElementById("Lincoln").onclick = saySomething;
     document.getElementById("Kennedy").onclick = saySomething;
      document.getElementById("Nixon").onclick = saySomething;
}
      
      function saySomething() {
    switch(this.id) {
        case "Lincoln":
            var ans = prompt("Are you Ready to make me your Boyfriend..","(Type YES or No)");
            if (ans) {
                alert("You said "  +ans );}
            else
                alert("you refuse");
          break;
          
        case "Kennedy":
             var resp = prompt("I follow You as a girlfriend & You Treat me as you Friend","(Type YES or No)");
            if (resp) {
               alert("You Said "  +resp );}
            else
                alert("you refuse");
              break;
        case "Nixon":
             var res = prompt("Sorry You have to obey the bet of Deepak","(Type YES or No)");
            if (res) {
                alert("You said "   +res );}
            else
                alert("you refuse");
            break;
             default:
    }
}