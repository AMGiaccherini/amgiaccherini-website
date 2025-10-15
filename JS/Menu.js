const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('#menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {

    menu.classList.toggle('active');

    if (body.style.overflow == "") {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
});