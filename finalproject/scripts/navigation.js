
export function toggleBurgerMenu() {
    const burgerElement = document.querySelector('#burger');
    const navElement = document.querySelector('#dish');

    burgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        burgerElement.classList.toggle('open');
    });
}

export function backToTopButton() {
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
}

export function setActiveLink() {
    const links = document.querySelectorAll('.links a');
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.parentElement.classList.add("active");
        } else {
            link.parentElement.classList.remove("active");
        }
    });
}
