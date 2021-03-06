const ul = document.querySelector("ul");
const loadingImg = document.createElement("img");
loadingImg.src = "../image/loading-circle-1.gif";
const buttonShow = document.getElementById("button-show");
const modal = document.getElementById("modal");
const modalInner = document.getElementById("modal-inner");
const buttonModal = document.getElementById("button-modal");
const buttonClose = document.getElementById("button-close");
const inputNumber = document.getElementById("input-number");

function show() {
  modalInner.appendChild(loadingImg);
  console.log(inputNumber.value);
  fetch("https://my-json-server.typicode.com/kkata/demo/db")
    .then((response) => {
      if (!response.ok) {
        throw Error(err.message);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      modalInner.removeChild(loadingImg);
      modalInner.removeChild(buttonShow);
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

buttonShow.addEventListener(
  "click",
  (event) => {
    show();
  },
  false
);

buttonModal.addEventListener(
  "click",
  (event) => {
    modal.style.display = "block";
  },
  false
);
buttonClose.addEventListener(
  "click",
  (event) => {
    modal.style.display = "none";
  },
  false
);
