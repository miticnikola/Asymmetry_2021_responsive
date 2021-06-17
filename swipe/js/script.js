let btnsAnswer = document.querySelectorAll('.answer');

btnsAnswer.forEach(answer => {
    answer.addEventListener('click', () => {
        window.location.href = "../../registration/index.html";
    });
    answer.addEventListener('touchstart', () => {
        window.location.href = "../../registration/index.html";
    });
});


// SWIPING // FOR DEVICES ON TOUCH
let startingX;
let startingY;
let movingX;
let movingY;

function touchStart(e) {
    startingX = e.touches[0].clientX;
    startingY = e.touches[0].clientY;
}
function touchMove(e) {
    movingX = e.touches[0].clientX;
    movingY = e.touches[0].clientY;
}
function touchEnd() {
    if (startingX + 100 < movingX) {
        window.location.href = "../../registration/index.html";
    } else if (startingX - 100 > movingX) {
        window.location.href = "../../registration/index.html";
    }
}

let html = document.querySelector('html');

// Events
html.addEventListener('touchstart', touchStart);
html.addEventListener('touchmove', touchMove);
html.addEventListener('touchend', touchEnd);

