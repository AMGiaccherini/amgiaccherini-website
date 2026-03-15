const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const mobile = document.getElementById('mobile');
const animation = document.getElementById('nav-icon3');

var shown = true;

hamburger.addEventListener('click', () => {

    menu.classList.toggle('active');
    animation.classList.toggle('open');
    
    if(shown) {
        document.body.style.overflow = "hidden";
        document.body.style.top = `-${window.scrollY}px`;
        hamburger.style.zIndex = 4;
    } else {
        document.body.style.overflow = "";
        document.body.style.top = "";
        window.scrollTo(0, window.scrollY);
        hamburger.style.zIndex = 2;
    }

    shown= !shown;
});

function popup() {
    window.alert('This page is still on working, look at GitHub links for my personal projects');
}