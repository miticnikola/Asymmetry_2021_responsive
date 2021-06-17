let btnsAnswer = document.querySelectorAll('.answer');

btnsAnswer.forEach(answer => {
    answer.addEventListener('click', () => {
        window.location.href = "../../swipe/index.html";
    });
    answer.addEventListener('touchstart', () => {
        window.location.href = "../../swipe/index.html";
    });
});