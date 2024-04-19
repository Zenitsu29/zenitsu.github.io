// Toggle navbar collapse on click
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

// Hide navbar collapse on click outside
document.addEventListener('click', (event) => {
  const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

  if (!isClickInside) {
    navbarCollapse.classList.remove('show');
  }
});

// Close navbar collapse on menu item click
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarCollapse.classList.remove('show');
  });
});