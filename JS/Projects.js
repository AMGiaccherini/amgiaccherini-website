const expsdiv = document.getElementById('experiences');
const stack = document.getElementById('stacks');
const cate = document.getElementById('category');
const cates = document.querySelectorAll('#list-category .category');
const stacks = document.querySelectorAll('#list-stacks .stack');

let projects = [];
let activeStacks = new Set();
let activeCategory = new Set();

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("files/projects/projects.json");
    projects = await res.json();

    renderProjects(projects);

    addFilters();

    document.getElementById('list-stacks').addEventListener('click', (e) => {
        if (e.target.classList.contains('stack')) {
            toggleFilter(e.target, activeStacks);
            applyFilters();
        }
    });

    document.getElementById('list-category').addEventListener('click', (e) => {
        if (e.target.classList.contains('category')) {
            toggleFilter(e.target, activeCategory);
            applyFilters();
        }
    });
});

stack.onclick = () => {
    stack.classList.toggle('sort-active');
    document.getElementById('list-stacks').classList.toggle('list-active');
    cate.classList.toggle('sort-active');
    document.getElementById('list-category').classList.toggle('list-active');
}

cate.onclick = () => {
    cate.classList.toggle('sort-active');
    document.getElementById('list-category').classList.toggle('list-active');
    stack.classList.toggle('sort-active');
    document.getElementById('list-stacks').classList.toggle('list-active');
}

function toggleFilter(span, activeSet) {
    const value = span.textContent.trim();

    if(activeSet.has(value)) 
        activeSet.delete(value);
    else 
        activeSet.add(value);
    span.classList.toggle('uncheck');
}

function applyFilters() {
    const filtered = projects.filter(p => {
        const matchStacks = activeStacks.size === 0 || p.stacks.some (s => activeStacks.has(s));
        const matchCategory = activeCategory.size === 0 || activeCategory.has(p.category);
        return matchStacks && matchCategory; 
    });

    renderProjects(filtered);
}

function addFilters() {
    const stackdiv =  document.getElementById('list-stacks');
    const catediv = document.getElementById('list-category');

    let stacklist = [];
    let catelist = [];

    projects.forEach(p => {
        p.stacks.forEach(s => {
            if(!stacklist.includes(s)) {
                stacklist.push(s);
                var stack = document.createElement('span');
                stack.setAttribute('class', 'stack');
                stack.classList.add('uncheck');
                stack.innerHTML = s;
                stackdiv.append(stack);
            }
        });

        if(!catelist.includes(p.category)) {
            catelist.push(p.category);
            var category = document.createElement('span');
            category.setAttribute('class', 'category');
            category.classList.add('uncheck');
            category.innerHTML = p.category;
            catediv.append(category);
        }
    });
}

function renderProjects(pjs) {
    expsdiv.innerHTML = '';
    var currentYear = null;

    pjs.forEach(p => {
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