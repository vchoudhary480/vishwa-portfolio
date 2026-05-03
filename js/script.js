/*
  Portfolio interactions
  - Updates copyright year
  - Mobile nav toggle
  - Highlights active nav link based on scroll
*/

document.addEventListener('DOMContentLoaded', () => {

  // Update copyright year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active nav link as the user scrolls
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function activateNavLink() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let currentId = '';

    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 150;
      const offsetBottom = offsetTop + section.offsetHeight;
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        currentId = section.getAttribute('id');
      }
    });

    navAnchors.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', activateNavLink, { passive: true });
  activateNavLink();
});
