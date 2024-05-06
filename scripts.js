/// Loop through each service and add click event listener
services.forEach(service => {
  service.addEventListener('click', () => {
    // Calculate the distance to slide
    const distanceToSlide = service.getBoundingClientRect().left - services[0].getBoundingClientRect().left;
    
    // Slide all services to the left by the calculated distance
    services.forEach(s => {
      s.style.transform = `translateX(-${distanceToSlide}px)`;
    });
  });
});

// JavaScript for pressing effect
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mousedown', () => {
    link.style.transform = 'translateY(0)';
  });

  link.addEventListener('mouseup', () => {
    link.style.transform = 'translateY(-2px)';
  });
});




// JavaScript for switching testimonials
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

function nextTestimonial() {
  currentIndex++;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  }
  showTestimonial(currentIndex);
}

// Show the first testimonial initially
showTestimonial(currentIndex);

// Add event listeners for navigation buttons
document.querySelector('.carousel-navigation .prev').addEventListener('click', prevTestimonial);
document.querySelector('.carousel-navigation .next').addEventListener('click', nextTestimonial);

