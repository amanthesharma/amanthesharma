// script.js

// Toggle mobile navigation (for screens ≤768px)
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".navbar ul");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
