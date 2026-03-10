const expsdiv = document.getElementById('experiences');

let projects = [];
var currentYear;

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("files/projects/projects.json");
    projects = await res.json();

    renderProjects();
});

function renderProjects() {
    projects.forEach(p => {
        if (!currentYear || currentYear < p.year) {
            const yeardiv = document.createElement('div');
            yeardiv.setAttribute('class', 'year');

            const yeartitle = document.createElement('h1');
            yeartitle.setAttribute('class', 'year-title');
            yeartitle.innerHTML = p.year;

            yeardiv.append(yeartitle);
            expsdiv.append(yeardiv);
            
            currentYear = p.year;
        }

        const expbox = document.createElement('div');
        expbox.setAttribute('class', 'experience-box');
        expbox.setAttribute('onclick', 'redirect('+p.id+')');
        expsdiv.append(expbox);

        const title = document.createElement('span');
        title.setAttribute('class', 'title');
        title.innerHTML = p.title;
        expbox.append(title);

        const desc = document.createElement('span');
        desc.setAttribute('class', 'desc');
        desc.innerHTML = p.description;
        expbox.append(desc);

        const info = document.createElement('div');
        info.setAttribute('class', 'info');
        expbox.append(info);

        const stacks = document.createElement('div');
        stacks.setAttribute('class', 'stacks');
        info.append(stacks);

        p.stacks.forEach(s => {
            const stack = document.createElement('span');
            stack.setAttribute('class', 'stack');
            stack.innerHTML = s;
            stacks.append(stack);
        });

        const category = document.createElement('span');
        category.setAttribute('class', 'category');
        category.innerHTML = p.category;
        info.append(category);
    })
}

function redirect(id) {
    window.open(projects[id].url, "_blank");
}
