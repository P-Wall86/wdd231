
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const closeMenuButton = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
});

closeMenuButton.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
});
