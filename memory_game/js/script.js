let divCard = document.querySelectorAll('.card');

divCard.forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = "../../quiz/index.html";
    });
    card.addEventListener('touchstart', () => {
        window.location.href = "../../quiz/index.html";
    });
});