let requirements = {};

async function loadRequirements() {
    try {
        const response = await fetch('./data/requirements.json');
        if (!response.ok) {
            throw new Error('Could not load requirements data.');
        }
        requirements = await response.json();
    } catch (err) {
        console.error(err);
    }
}

function updateChecklist(petType) {
    const container = document.getElementById('checklist-content');
    container.innerHTML = '';

    const data = requirements[petType];
    if (!data) return;
    
    let totalItems = 0;
    let checkedItems = 0;

    data.forEach(section => {
        const h3 = document.createElement('h3');
        h3.textContent = section.title;
        container.appendChild(h3);

        const ul = document.createElement('ul');
        
        section.items.forEach(item => {
            const li = document.createElement('li');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('requirement-check');
        
            checkbox.addEventListener('change', () => {
                checkedItems = document.querySelectorAll('.requirement-check:checked').length;
                const allChecked = checkedItems === totalItems;
                document.querySelector('#adoption-form button[type="submit"]').disabled = !allChecked;
            });

            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.append(` ${item}`);

            li.appendChild(label);
            ul.appendChild(li);
            totalItems++;
        });

        container.appendChild(ul);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadRequirements();

    document.getElementById('pet-type').addEventListener('change', function () {
        updateChecklist(this.value);
    });
});