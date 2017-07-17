let container = document.querySelector('.contentHere');

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/deansy11");
req.addEventListener("load", reqListener);
req.send();

function reqListener () {
  let data = JSON.parse(this.responseText);
  let accountInfo = `My name is ${data.name} and I am from ${data.location}`
  console.log(data);
}

let template = `

`





// a7890b2f1b5090ada952539d535e04a5c68f5468
