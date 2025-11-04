const text = document.getElementById('text');
const form = document.getElementById('form');

window.addEventListener('load', () => {

    var width = window.innerWidth;
    
    if (width >= 1024) {
        text.setAttribute('rows', '7');
    }
    
    if (width >= 1920) {
        form.setAttribute('style', 'padding-right: 15rem;');
    } else if (form.hasAttribute('style')) {
        form.removeAttribute('style');
    }
});

window.addEventListener('resize', () => {

    var width = window.innerWidth;

    if (width >= 1024) {
        text.setAttribute('rows', '7');
    } 
    
    if (width >= 1920) {
        form.setAttribute('style', 'padding-right: 15rem;');
    } else if (form.hasAttribute('style')) {
        form.removeAttribute('style');
    }
});