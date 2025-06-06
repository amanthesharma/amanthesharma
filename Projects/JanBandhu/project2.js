const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      document.querySelector('nav a.active')?.classList.remove('active');
      document.querySelector(`nav a[href="#${entry.target.id}"]`)?.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(sec => observer.observe(sec));
