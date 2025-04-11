//ACCORDION
document.addEventListener("DOMContentLoaded", () => {
    const infoBoxes = document.querySelectorAll('.info-box');

    infoBoxes.forEach(box => {
        const title = box.querySelector('.info-title');

        title.addEventListener('click', () => {
            box.classList.toggle('active');
        });
    });
});

//MODAL
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("show-benefits");
    const modal = document.getElementById("benefits-modal");
    const closeBtn = modal.querySelector(".close-button");

    openBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});