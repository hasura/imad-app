console.log('loaded!');

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

window.onload = initAll;

function initAll() {
    document.getElementById("Lincoln").onclick = saysomething;
     document.getElementById("kennedy").onclick = saysomething;
      document.getElementById("Nixon").onclick = saysomething;
}
      
      function saysomething() {
    switch(this.id) {
        case "Lincoln":
            
                alert("You said"  );
             
            break;
        case "Kennedy":
             
                alert("You said" );
            
             
             break;
        case "Nixon":
             
                alert("You said");
            
             break;
             default:
    }
}