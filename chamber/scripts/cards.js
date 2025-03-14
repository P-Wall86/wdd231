//FETCHING JSON
fetch('./data/members.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        generateCards(data);
    })
    .catch(error => console.error('Error fetching JSON:', error));

//CARDS GENERATOR
function generateCards(data) {
    const cardsSection = document.getElementById("json-cards-section");

    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = item.name;
        card.appendChild(title);

        const tagline = document.createElement("p");
        tagline.textContent = item.tagline || "Your tagline here";
        tagline.classList.add("tagline");
        card.appendChild(tagline);

        const description = document.createElement("p");
        description.textContent = item.additional_info?.description || "No description available.";
        description.classList.add("description");
        card.appendChild(description);

        const divider = document.createElement("hr");
        card.appendChild(divider);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;
        image.classList.add("card-image");
        cardContent.appendChild(image);

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const email = document.createElement("p");
        email.textContent = `Email: ${item.email || "rsboutique@domain.com"}`;
        cardInfo.appendChild(email);

        const phone = document.createElement("p");
        phone.textContent = `Phone: ${item.phone}`;
        cardInfo.appendChild(phone);

        const website = document.createElement("a");
        website.href = item.website;
        const url = new URL(item.website);
        website.textContent = url.hostname;
        website.target = "_blank";
        cardInfo.appendChild(website);

        cardContent.appendChild(cardInfo);
        card.appendChild(cardContent);
        cardsSection.appendChild(card);
    });
}

