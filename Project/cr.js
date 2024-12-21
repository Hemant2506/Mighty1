// Dynamic Job Openings
const openings = [
  { title: 'Software Developer', description: 'Responsible for creating web applications and backend services.' },
  { title: 'UI/UX Designer', description: 'Design intuitive user interfaces and enhance user experiences.' },
  { title: 'Project Manager', description: 'Oversee projects from start to finish, managing timelines and teams.' },
];

// Populate the job openings section dynamically
const openingsList = document.getElementById('openingsList');
openings.forEach(opening => {
  const card = document.createElement('div');
  card.classList.add('opening-card');
  card.innerHTML = `
    <h3>${opening.title}</h3>
    <p>${opening.description}</p>
    <button onclick="applyForJob('${opening.title}')">Apply Now</button>
  `;
  openingsList.appendChild(card);
});

// Form Validation
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const jobRole = document.getElementById("jobRole").value;
  const resume = document.getElementById("resume").value;

  // Check if all fields are filled
  if (name === "" || email === "" || phone === "" || city === "" || jobRole === "" || resume === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate phone number (example: simple validation for 10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  alert("Application submitted successfully!");
  return true;
}

// Apply for job functionality
function applyForJob(jobTitle) {
  alert(`You are applying for the role: ${jobTitle}`);
}
