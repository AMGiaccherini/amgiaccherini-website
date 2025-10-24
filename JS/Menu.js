const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const body = document.querySelector('body');
const animation = document.getElementById('nav-icon3');

var shown = true;

hamburger.addEventListener('click', () => {

    menu.classList.toggle('active');
    animation.classList.toggle('open');
    console.log(body.style.overflowY = (shown)?"hidden":"auto");
    shown=!shown;
});