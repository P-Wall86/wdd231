// ACCORDION
export function initializeAccordion() {
    const infoBoxes = document.querySelectorAll('.info-box');

    infoBoxes.forEach(box => {
        const title = box.querySelector('.info-title');

        if (title) {
            title.addEventListener('click', () => {
                box.classList.toggle('active');
            });
        }
    });
}

// MODAL
export function initializeModal() {
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
}

// THANK YOU MESSAGE
    const vetForm = document.getElementById("vetForm");

    if (vetForm) {
        vetForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const orgName = document.getElementById("orgName").value.trim();
            const contactEmail = document.getElementById("contactEmail").value.trim();
            const location = document.getElementById("location").value.trim();

            const formSubmission = {
                formType: "vet",
                orgName,
                contactEmail,
                location
            };

            localStorage.setItem("formSubmission", JSON.stringify(formSubmission));

            window.location.href = "thankyou.html";
        });
    }
