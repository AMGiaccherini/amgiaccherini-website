const glass = document.getElementById('magnifying-glass');
const sort = document.getElementById('sort-page');

var shown = true;
var scrollY = 0;

glass.onclick = () => {
    sort.classList.toggle('active');

    if(shown) {
        scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = "-"+scrollY+"px";
        glass.style.zIndex = 4;
    } else {
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
        glass.style.zIndex = 2;
    }

    shown = !shown;
}