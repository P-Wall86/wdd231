// Fetch!
document.addEventListener("DOMContentLoaded", () => {
    fetch("./data/discover.json")
        .then(response => response.json())
        .then(cards => {
            const container = document.getElementById("card-container");

            cards.forEach((card, index) => {
                const cardElement = document.createElement("div");
                cardElement.className = `card card-${index + 1}`;

                cardElement.innerHTML = `
                    <h2>${card.name}</h2>
                    <figure>
                        <img src="${card.img}" alt="${card.name}">
                    </figure>
                    <address><em>${card.address}</em></address>
                    <p><strong>${card.description}</strong></p>
                    <button>Learn more</button>
                `;

                container.appendChild(cardElement);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});

//LocalStorage-Visit
const messageBox = document.querySelector(".visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const msInDay = 1000 * 60 * 60 * 24;
    const daysBetween = Math.floor((now - lastVisit) / msInDay);

    if (daysBetween < 1) {
        message = "Back so soon? Awesome!";
    } else {
        message = `You last visited ${daysBetween} day${daysBetween === 1 ? "" : "s"} ago.`;
    }
}

if (messageBox) {
    messageBox.textContent = message;
}

localStorage.setItem("lastVisit", now);



