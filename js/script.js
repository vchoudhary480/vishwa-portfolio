/*
  Basic JavaScript to support interactive behaviour on the portfolio site.
  Currently this script updates the copyright year automatically. It also
  highlights the navigation links based on scroll position to give users
  a sense of where they are within the page. Additional scripts can be
  added here as the portfolio grows.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year dynamically
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Highlight the active navigation link as the user scrolls
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav-links a');

  function activateNavLink() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 150; // adjust when the highlight should trigger
      const offsetBottom = offsetTop + section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', activateNavLink);
  activateNavLink();
});