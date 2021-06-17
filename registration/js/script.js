let btnSubmit = document.querySelector('#submit');

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = "../../result/index.html"
});

btnSubmit.addEventListener('touchstart', e => {
    e.preventDefault();
    window.location.href = "../../result/index.html"
});

