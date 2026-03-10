let projects = [];

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("files/projects/projects.json");
    projects = await res.json();
});
