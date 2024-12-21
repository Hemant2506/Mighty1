let currentTestimonialIndex = 0;

const testimonials = document.querySelectorAll('.carousel-item');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    if (index >= totalTestimonials) {
        currentTestimonialIndex = 0;
    } else if (index < 0) {
        currentTestimonialIndex = totalTestimonials - 1;
    } else {
        currentTestimonialIndex = index;
    }

    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === currentTestimonialIndex ? 'block' : 'none';
    });
}

function changeTestimonial(direction) {
    showTestimonial(currentTestimonialIndex + direction);
}

showTestimonial(currentTestimonialIndex);

// Handle Rating System
let selectedRating = 0;

function selectRating(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll('.rating .star');
    stars.forEach((star, index) => {
        star.classList.toggle('selected', index < rating);
    });
    document.getElementById('ratingValue').value = rating;
}

// Testimonial submission form
const form = document.getElementById('testimonialForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const testimonialText = document.getElementById('testimonialText').value;
    const clientName = document.getElementById('clientName').value;
    const rating = selectedRating;

    if (testimonialText && clientName && rating > 0) {
        const newTestimonial = document.createElement('div');
        newTestimonial.classList.add('carousel-item');
        newTestimonial.innerHTML = `<p>"${testimonialText}"</p><h4>${clientName}</h4><div class="stars">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>`;

        document.getElementById('testimonialCarousel').appendChild(newTestimonial);
        document.getElementById('testimonialText').value = '';
        document.getElementById('clientName').value = '';
        document.getElementById('ratingValue').value = 0;
        selectedRating = 0;
        document.getElementById('thankYouMessage').style.display = 'block';

        // Hide thank you message after 3 seconds
        setTimeout(function() {
            document.getElementById('thankYouMessage').style.display = 'none';
        }, 3000);

        // Update carousel to show the new testimonial
        showTestimonial(totalTestimonials);
    } else {
        alert('Please provide a testimonial and select a rating!');
    }
});