
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-link');


mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

