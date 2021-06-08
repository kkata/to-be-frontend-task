const ul = document.querySelector("ul");
const loadingImg = document.createElement("img");
loadingImg.src = "../image/loading-circle-1.gif";

const array = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
];

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(array);
  }, 3000);
});

document.body.appendChild(loadingImg);

promise.then((value) => {
  document.body.removeChild(loadingImg);
  value.forEach((element, index) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `<li><a href="/${element.to}"><img src="${element.img}" alt="${element.alt}">${element.text}</a></li>`
    );
  });
});
