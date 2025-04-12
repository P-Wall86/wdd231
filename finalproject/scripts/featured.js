export async function loadFeaturedPets() {
    const container = document.getElementById("featured-container");
    if (!container) {
        return;
    }

    try {
        const response = await fetch('./data/catalog.json');
        if (!response.ok) {
            throw new Error('Failed to fetch pet data');
        }
        const pets = await response.json();

        const container = document.getElementById('featured-container');
        const featuredPets = pets.filter(pet => pet.featured);

        featuredPets.forEach((pet, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}" loading="lazy">
                <div class="card-content">
                    <h3>${pet.name}</h3>
                    <p><strong>${pet.breed}</strong></p>
                    <p>${pet.age}</p>
                    <p>${pet.description}</p>
                    <a href="adopt.html" target="_blank">See more →</a>
                </div>
            `;
            container.appendChild(card);

            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 150);
        });
    } catch (error) {
        console.error("Couldn't load pets:", error);
    }
}
