let pets = [];

async function loadPets() {
    try {
        const response = await fetch('./data/catalog.json');
        if (!response.ok) {
            throw new Error('Failed to fetch pet data');
        }
        pets = await response.json();
        loadPetTypes();
        displayPets(pets);
    } catch (error) {
        console.error('Error loading pets:', error);
    }
}

function loadPetTypes() {
    const petTypeSelect = document.getElementById('pet-type-filter');

    const petTypes = new Set(pets.map(pet => pet.type));
    petTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        petTypeSelect.appendChild(option);
    });
}

function displayPets(petsList) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';

    petsList.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('card');
        petCard.innerHTML = `
        <h2>${pet.name}</h2>
        <img src="${pet.image}" alt="${pet.name}" loading="lazy">
        <div class="info">
        <p><strong>Species: </strong> ${pet.species}</p>
        <p><strong>Breed: </strong> ${pet.breed}</p>
        <p><strong>Age: </strong> ${pet.age}</p>
        <p><strong>Size: </strong> ${pet.size}</p>
        <p><strong>Description: </strong> ${pet.description}</p>
    `;
        catalog.appendChild(petCard);
    });
}

function filterPets() {
    const selectedType = document.getElementById('pet-type-filter').value;

    let filteredPets = [];
    if (selectedType === 'all') {
        filteredPets = pets;
    } else {
        filteredPets = pets.filter(pet => pet.type === selectedType);
    }

    displayPets(filteredPets);
}

document.addEventListener('DOMContentLoaded', () => {
    loadPets();
});