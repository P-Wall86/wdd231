document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/cards.json');
        const levels = await response.json();

        const container = document.querySelector('.cards-container');
        const modal = document.getElementById('modal');

        document.getElementById('membership-form').addEventListener('submit', function () {
            document.getElementById('timestamp').value = new Date().toISOString();
        });

        levels.forEach((level, index) => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <h3>${level.title} Membership Level</h3>
                <button class="learn-more" data-level="${level.id}">LEARN MORE</button>
            `;
            container.appendChild(card);

            setTimeout(() => {
                card.classList.add('visible');
            }, 100 * index);
        });

        document.querySelectorAll('.learn-more').forEach(btn => {
            btn.addEventListener('click', () => {
                const level = levels.find(l => l.id === btn.dataset.level);
                const modalContent = document.getElementById('modal-content');

                modalContent.innerHTML = `
                    <div class="modal-header">
                        <h3>${level.title} Level</h3>
                        <button class="close-modal" aria-label="Close modal">X</button>
                    </div>
                    <div class="modal-body">
                        <p class="cost" style="text-align: left; margin: 0; padding: 0;"><strong>Cost:</strong> ${level.cost}</p>
                        <div class="benefits-section">
                            <h4>Benefits:</h4>
                            <ul class="benefits-list">
                                ${level.benefits.map(b => `<li><span class="benefit-item">${b}</span></li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;

                modal.querySelector('.close-modal').addEventListener('click', () => {
                    modal.close();
                });

                modal.showModal();
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });

    } catch (error) {
        console.error('Error loading membership data:', error);
    }
});