// Scroll animation using IntersectionObserver
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

// Animate hero text on load
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-3d');
  hero.classList.add('animate');
});

// Contact Form Feedback
document.querySelector("form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const message = this.querySelector("textarea").value;

  console.log("Feedback received:", { name, email, message });
  alert("Thank you for your feedback, " + name + "!");

  this.reset();
});
