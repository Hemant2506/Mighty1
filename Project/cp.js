document.getElementById("inquiryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Your inquiry has been submitted successfully!");
  this.reset(); // Reset form after submission
});
