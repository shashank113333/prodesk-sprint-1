document.addEventListener('DOMContentLoaded', () => {

  const themeToggle = document.getElementById('theme-toggle');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const header = document.querySelector('.header');

  // Dark mode toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Frosted glass header effect on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      // Optimized: Using toggle with a boolean condition
      header.classList.toggle('glass', window.scrollY > 30);
    });
  }});