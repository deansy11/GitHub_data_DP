let container = document.querySelector('.contentHere');

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/");
req.send();
