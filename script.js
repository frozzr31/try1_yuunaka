const navigationLinks = document.querySelectorAll('a[href^="#"]');
const overlay = document.querySelector('.page-overlay');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
  spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : '';
});

// Smooth Scroll with Fade Transition
navigationLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    
    // Close mobile menu
    navMenu.classList.remove('active');
    
    overlay.classList.add('active');
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      window.setTimeout(() => overlay.classList.remove('active'), 400);
    }, 800);
  });
});

// Intersection Observer for Section Animations
const sections = document.querySelectorAll('main section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    } else {
      entry.target.classList.remove('section-visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => {
  sectionObserver.observe(section);
});
