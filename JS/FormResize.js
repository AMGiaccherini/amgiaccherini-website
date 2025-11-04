const text = document.getElementById('text');

window.addEventListener('load', () => {

    var width = window.innerWidth;
    
    if (width >= 1024) {
        text.setAttribute('rows', '7');
    }
});

window.addEventListener('resize', () => {

    var width = window.innerWidth;

    if (width >= 1024) {
        text.setAttribute('rows', '7');
    }
});