let container = document.querySelector('.content');

fetch("https://api.github.com/users/deansy11")
  .then(
    function(response) {
      if(response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        let template = `
        <h1>${data.name}</h1>
        <div class="totalContent">
        <div class="basics">
        <h3>The Basics</h3>
        <ul>
        <li><span>Name: </span>${data.name}</li>
        <li><span>GitHub URL: </span>${data.html_url}</li>
        <li><span>Company: </span>The Iron Yard</li>
        <li><span>Website: </span>${data.blog}</li>
        </ul>
        </div>
        <div class="story">
        <h3>The Story</h3>
        <p>${data.bio}</p>
        </div>
        <div class="avatar">
        <img src="${data.avatar_url}" alt="profile pic">
        </div>
        </div>
        `
        container.innerHTML = template;
      });
    }
  )

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/deansy11");
// req.addEventListener("load", reqListener);
// req.send();

// function reqListener () {
//   let data = JSON.parse(this.responseText);
