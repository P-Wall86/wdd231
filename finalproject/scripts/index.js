import { loadPets, filterPets } from './adopt-cards.js';
import { loadFeaturedPets } from './featured.js';
import { updateFooter } from './footer.js';
import { toggleBurgerMenu, backToTopButton, setActiveLink } from './navigation.js';
import { openModal, loadRequirements, updateChecklist} from './requirements.js';
import { initializeAccordion, initializeModal} from './resources.js';

document.addEventListener('DOMContentLoaded', async () => {
    loadPets();
    const petFilter = document.getElementById('pet-type-filter');
    if (petFilter) {
        petFilter.addEventListener('change', filterPets);
    }
    loadFeaturedPets();
    updateFooter();
    toggleBurgerMenu();
    backToTopButton();
    setActiveLink();

    if (document.querySelector('.info-icon')) {
        openModal();
    }
    await loadRequirements();
    const petType = document.getElementById('pet-type');
    if (petType) {
        petType.addEventListener('change', function () {
            updateChecklist(this.value);
        });
    }

    initializeAccordion();
    if (document.getElementById('vetForm')) {
        initializeModal();
    }
});