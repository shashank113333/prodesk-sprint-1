document.addEventListener('DOMContentLoaded', () => {

  // STEP 1: HTML Elements Ko Select Karo
  const themeToggle = document.getElementById('theme-toggle');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const header = document.querySelector('.header');

  // STEP 2: Dark Mode Toggle Button Event Listener
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // STEP 3: Mobile Hamburger Menu Toggle Event Listener
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // STEP 4: Frosted Glass Header Scroll Effect
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('glass');
      } else {
        header.classList.remove('glass');
      }
    });
  }

});