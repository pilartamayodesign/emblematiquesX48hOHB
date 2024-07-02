
// CARRUSELES GALERÍAS IMÁGENES


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("imagencarrusel");
  let totalSlides = slides.length;

  if (n > totalSlides) {
    slideIndex = 1; 
  }
  if (n < 1) {
    slideIndex = totalSlides; 
  }

  let carrusel = document.querySelector('.carrusel');
  let slideWidth = carrusel.offsetWidth;
  carrusel.scrollLeft = (slideIndex - 1) * slideWidth;

    
  carrusel.style.scrollBehavior = 'smooth'; 
  carrusel.scrollLeft = targetScroll;
  
  
  setTimeout(() => {
    carrusel.style.scrollBehavior = 'auto'; 
  }, 500); 

}


