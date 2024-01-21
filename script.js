function selectCard(card, pageNumber, isReal) {
    let cards = document.querySelectorAll('#page' + pageNumber + ' .card');
    cards.forEach(c => {
        c.classList.remove('selected-true', 'selected-false');
    });
    card.classList.add(isReal ? 'selected-true' : 'selected-false');
}

function nextPage(pageNumber) {
    let currentPage = document.querySelector('.page.active');
    if (currentPage) {
        currentPage.classList.remove('active');
    }
    let nextPage = document.querySelector('#page' + pageNumber);
    if (nextPage) {
        nextPage.classList.add('active');
    }
}

// Initialize first page
document.addEventListener('DOMContentLoaded', () => {
    nextPage(1);
});
