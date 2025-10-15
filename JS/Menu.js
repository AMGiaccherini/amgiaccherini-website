const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('#menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {

    menu.classList.toggle('active');

    document.getElementById('nav-icon3').classList.toggle('open');

    if (body.style.overflow == "") {
        body.style.overflow = "hidden";
        body.style.overscrollBehavior = "none";
    } else {
        body.style.overflow = "";
        body.style.overscrollBehavior = "";
    }


});