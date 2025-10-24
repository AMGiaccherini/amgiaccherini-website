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
        body.style.width = '100%';
    } else {
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, scrollY);
    }

    shown=!shown;
});