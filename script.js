document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    this.reset();
  });
  
  // Reveal sections and cards on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  