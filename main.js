let container = document.querySelector('.content');

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/deansy11");
req.addEventListener("load", reqListener);
req.send();

function reqListener () {
  let data = JSON.parse(this.responseText);

  let template = `
    <h1>${data.name}</h1>
    <div class="totalContent">
        <div class="basics">
          <h3>The Basics</h3>
            <ul>
              <li>Name: ${data.name}</li>
              <li>GitHub URL: ${data.html_url}</li>
              <li>Email: emilyldeans@gmail.com</li>
              <li>Company: ${data.company}</li>
              <li>Website: ${data.blog}</li>
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
};
