document.addEventListener('DOMContentLoaded', () => {

  const themeToggle = document.getElementById('theme-toggle');

  const hamburger = document.getElementById('hamburger');

  const navMenu = document.getElementById('nav-menu');

  const header = document.querySelector('.header');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }


  if (header) {
    window.addEventListener('scroll', () => {
      
      header.classList.toggle('glass', window.scrollY > 30);
    });
  }});