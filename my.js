// Add your custom JavaScript here

// Example: Hide the navigation menu on small screens when the toggle button is clicked
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', function() {
    navbarNav.classList.toggle('show');
});
