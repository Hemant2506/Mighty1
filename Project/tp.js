// script.js

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const testimonialForm = document.getElementById('testimonialForm');
const testimonialSlider = document.querySelector('.testimonial-slider');

// Show the active testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

// Navigate testimonials
prevButton.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  showTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  showTestimonial(currentIndex);
});

// Submit a new testimonial
testimonialForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const text = document.getElementById('testimonialText').value;
  const name = document.getElementById('testimonialName').value;

  // Create a new testimonial element
  const newTestimonial = document.createElement('div');
  newTestimonial.classList.add('testimonial');
  newTestimonial.innerHTML = `<p>"${text}"</p><h3>– ${name}</h3>`;

  // Add the new testimonial to the slider
  testimonialSlider.appendChild(newTestimonial);

  // Clear the form
  testimonialForm.reset();

  alert('Your testimonial has been added!');
});

// Initialize the first testimonial
showTestimonial(currentIndex);
