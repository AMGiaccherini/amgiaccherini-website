const glass = document.getElementById('magnifying-glass');
const sort = document.getElementById('sort-page');

var shown = true;

glass.onclick = () => {
    sort.classList.toggle('active');

    if(shown) {
        document.body.style.overflow = "hidden";
        document.body.style.top = `-${window.scrollY}px`;
        glass.style.zIndex = 4;
    } else {
        document.body.style.overflow = "";
        document.body.style.top = "";
        window.scrollTo(0, window.scrollY);
        glass.style.zIndex = 2;
    }

    shown = !shown;
}