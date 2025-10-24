const arrow = document.getElementById('arrow');
const hat = [];

window.addEventListener('load' , () => {

    var width = window.innerWidth;

    document.querySelectorAll('.hat').item

    for(var i = 0; i < document.querySelectorAll('.hat').length; i++) {
        hat[i] = document.querySelectorAll('.hat').item(i);
    }

    if(width < 768) {
        arrow.setAttribute('viewBox', '-4 -4 28 28');
        hat.forEach(hats => {
            hats.setAttribute('viewBox', '0 0 21 21');
        });
    } else if (width >= 780) {
        arrow.setAttribute('viewBox', '-4 -6 28 28');
    }
})

window.addEventListener('resize', () => {

   var width = window.innerWidth;

    if(width < 768) {
        arrow.setAttribute('viewBox', '-4 -4 28 28');
        hat.forEach(hats => {
            hats.setAttribute('viewBox', '0 0 21 21');
        });
    } else if(width >= 780) {
        arrow.setAttribute('viewBox', '-4 -6 28 28');
    }
})


