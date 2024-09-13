let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  
  if (index >= slides.length) {
    currentSlide = 0; // Loop back to the first slide
  } else if (index < 0) {
    currentSlide = slides.length - 1; // Go to the last slide
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, idx) => {
    // Use translateX to move slides horizontally
    slide.style.transform = `translateX(${(idx - currentSlide) * 100}%)`;
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Auto slide every 5 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

// Initialize the first slide
showSlide(currentSlide);
