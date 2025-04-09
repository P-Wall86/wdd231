fetch('./data/catalog.json')
    .then(res => res.json())
    .then(pets => {
        const container = document.getElementById('featured-container');
        const featuredPets = pets.filter(p => p.featured);

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
        <a href="${pet.link}">See more →</a>
        </div>
    `;
            container.appendChild(card);

            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 150)
        });
    })
    .catch(err => console.error("Couldn't load pets:", err));