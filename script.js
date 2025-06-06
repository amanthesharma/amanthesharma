// Remove smooth scrolling for external links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // If it's an external link (not part of the same page)
        if (!this.getAttribute('href').startsWith('#')) {
            return; // Allow default behavior (navigating to another page)
        }

        e.preventDefault(); // Prevent default scrolling
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}
