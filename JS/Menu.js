const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const body = document.body;
const animation = document.getElementById('nav-icon3');

let shown = true;
let scrollY = 0;

hamburger.addEventListener('click', () => {

    menu.classList.toggle('active');
    animation.classList.toggle('open');
    
    if(shown) {
        scrollY = window.scrollY;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
    } else {
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, scrollY);
    }

    shown=!shown;
});

function popup() {
    window.alert('This page is still on working, look at GitHub links for my personal projects');
}