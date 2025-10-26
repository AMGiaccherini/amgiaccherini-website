const root = document.querySelector(':root');
let nav = document.getElementById('medium');

window.addEventListener('load' , () => {

    var navHeight = nav.clientHeight;
    root.style.setProperty('--vwh', (window.innerHeight - navHeight)+"px");

})

window.addEventListener('resize', () => {

    var navHeight = nav.clientHeight;
    root.style.setProperty('--vwh', (window.innerHeight - navHeight)+"px");

})