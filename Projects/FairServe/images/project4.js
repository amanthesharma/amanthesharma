// script.js
// Smooth scroll for Explore button and nav links
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
  });
});
