let slideValue = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideValue++;
  if (slideValue > slides.length) {slideValue = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideValue-1].style.display = "block";  
  dots[slideValue-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}