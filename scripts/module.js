import { courses } from "./course.js"
//console.log(courses);

const dialog = document.querySelector('#course-details');
const courseButtons = document.querySelector('.course-buttons');

courseButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const courseTitle = e.target.textContent.split(': ')[1];
        const course = courses.find(c => c.title === courseTitle);

        dialog.innerHTML = `
        <div class="dialog-header">
        <h3>${course.subject} ${course.number}</h3>
        <button class="close-dialog" aria-label="Close">✕</button>
        </div>
        <div class="dialog-body">
        <p>${course.credits} credits</p>
        <p>Certificate: ${course.certificate}</p>
        <p>${course.description}</p>
        <p>Technology: ${course.technology.join(', ')}</p>
        </div>`;

        dialog.showModal();

        dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
    }
});

dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
});