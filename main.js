const imgURLArr = [
  "img/2.jpg",
  "img/1.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
];

const promiseArr = [];

for (const url of imgURLArr) {
  const promise = new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.classList.add("picture", "hidden");
    img.src = url;

    img.addEventListener("load", function () {
  
      resolve();
    });

    img.addEventListener("error", function () {
      reject();
    });

    document.body.append(img);
  });

  promiseArr.push(promise);
}

Promise.all(promiseArr).then(
  function () {
    document.querySelector(".spinner").classList.remove("loading");
    document.querySelectorAll(".picture").forEach((img) => {
      img.classList.add("show");
    });
  },
  function () {
    document.querySelector(".spinner").classList.remove("loading");
    alert("Ошибка загрузки");
  }
);
