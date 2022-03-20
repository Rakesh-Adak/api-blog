let btn = document.getElementById("btn").addEventListener("click", getPost);
let postId = 0;
let cardDiv = document.getElementById("cardDiv");
let postApi = 'https://jsonplaceholder.typicode.com';
let fetchPost =  fetch(`${apiUrl}/posts`);

function getPost() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      for (let i = 0; i < 8; i++) {
        cardDiv.innerHTML += `
            <div class="card col-lg-3 col-md-4 col-sm-6" style="width:18rem;">
            <img class="card-img-top" src="${post[postId].thumbnailUrl}">
            <div class="card-body">
            <h5 class="card-title">${post[postId].id}</h5>
            <p class="card-text">${post[postId].title}</p>
            <a href="${postApi}/posts/${postId+1}" class="btn btn-primary" target="_blank">Read More</a>
            </div>
            </div>
            `;
        postId = postId + 1;
      }
    })

    .catch((e) => {
      console.log(e);
    });
}
