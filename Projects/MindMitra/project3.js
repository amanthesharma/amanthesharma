document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const revealOnScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('reveal');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // trigger on load
});
