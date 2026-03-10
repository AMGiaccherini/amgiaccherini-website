const request = new XMLHttpRequest();
let obj;

request.onload = function() {
    obj = JSON.parse(this.responseText);  
};

request.open("GET", "files/propjects/projects.json", true);
request.send();

alert(obj[0]);