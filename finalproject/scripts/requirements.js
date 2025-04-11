//MODAL
const infoIcon = document.querySelector('.info-icon');
const modal = document.getElementById('info-modal');
const closeBtn = document.querySelector('.close-button');

infoIcon.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

//REQUIREMENTS
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
        const accordionSection = document.createElement('div');
        accordionSection.classList.add('accordion-section');

        const h3 = document.createElement('h3');
        h3.classList.add('accordion-title');
        h3.textContent = section.title;

        const ul = document.createElement('ul');
        ul.classList.add('accordion-content');

        section.items.forEach(item => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('requirement-check');

            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.append(` ${item}`);

            li.appendChild(label);
            ul.appendChild(li);
            totalItems++;

            const allCheckboxes = container.querySelectorAll('.requirement-check');
            const submitBtn = document.querySelector('#adoption-form button[type="submit"]');

            function checkAllMarked() {
                const allChecked = [...allCheckboxes].every(box => box.checked);
                submitBtn.disabled = !allChecked;
            }

            allCheckboxes.forEach(box => {
                box.addEventListener('change', checkAllMarked);
            });

            accordionSection.appendChild(h3);
            accordionSection.appendChild(ul);
            container.appendChild(accordionSection);

            submitBtn.disabled = true;
        });
    });

    const accordionTitles = container.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.classList.toggle('active');
            title.classList.toggle('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadRequirements();

    document.getElementById('pet-type').addEventListener('change', function () {
        updateChecklist(this.value);
    });
});