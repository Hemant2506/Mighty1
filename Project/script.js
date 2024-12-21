// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
    console.log("Telecom Services Management Portal Loaded");

    // Form Validation for Careers Page
    const jobForm = document.getElementById("jobForm");
    if (jobForm) {
        jobForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const city = document.getElementById("city").value.trim();
            const role = document.getElementById("role").value;

            if (!name || !email || !phone || !city || !role) {
                alert("Please fill out all fields.");
                return;
            }

            if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!/^\d{10}$/.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            alert("Application submitted successfully!");
            jobForm.reset();
        });
    }

    // Testimonials Carousel
    const testimonials = document.querySelectorAll(".testimonial");
    let currentTestimonial = 0;

    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    };

    if (testimonials.length > 0) {
        showTestimonial(currentTestimonial);

        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000); // Change testimonial every 5 seconds
    }

    // Interactive Map (Hover Effect for States)
    const states = document.querySelectorAll(".state");
    states.forEach((state) => {
        state.addEventListener("mouseenter", () => {
            state.style.fill = "#ff9900";
        });

        state.addEventListener("mouseleave", () => {
            state.style.fill = ""; // Reset to original color
        });
    });
});