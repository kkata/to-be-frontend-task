const ul = document.querySelector("ul");
const loadingImg = document.createElement("img");
loadingImg.src = "../image/loading-circle-1.gif";

function show() {
  fetch("https://my-json-server.typicode.com/kkata/demo/db")
    .then((response) => {
      if (!response.ok) {
        throw Error(err.message);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      document.body.removeChild(loadingImg);
      data.data.forEach((element, index) => {
        ul.insertAdjacentHTML(
          "beforeend",
          `<li><a href="/${element.to}"><img src="${element.img}" alt="${element.alt}">${element.text}</a></li>`
        );
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

document.body.appendChild(loadingImg);
show();
