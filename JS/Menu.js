const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const mobile = document.getElementById('mobile');
const animation = document.getElementById('nav-icon3');

var shown = true;
var scrollY = 0;

hamburger.addEventListener('click', () => {

    menu.classList.toggle('active');
    animation.classList.toggle('open');
    
    if(shown) {
        scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        hamburger.style.zIndex = 4;
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
        hamburger.style.zIndex = 2;
    }

    shown= !shown;
});

function popup() {
    window.alert('This page is still on working, look at GitHub links for my personal projects');
}