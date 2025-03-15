//BURGER
const burgerElement = document.querySelector('#burger');
const navElement = document.querySelector('#dish');

burgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    burgerElement.classList.toggle('open');
});

//BACK-TO-TOP BUTTON
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const links = document.querySelectorAll('.links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        links.forEach(link => link.parentElement.classList.remove('active'));

        link.parentElement.classList.add('active');
    });
});