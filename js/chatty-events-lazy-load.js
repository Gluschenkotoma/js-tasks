// // Приемы throtling и debouncing с Lodash
// // _throttle - вызывай функцию не чаще чем (функция, к-во милисекунд)
// // скрол,ресайз(изменение размера окна), перетаскивание(дреги)
// const coordsOutputRef = document.querySelector(".js-coords");
// let mouseMoveCbInvocationCounter = 0;

// const throtleOnMauseMove = _.throttle(onMouseMove, 500);
// window.addEventListener("mousemove", throtleOnMauseMove);

// function onMouseMove(e) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputRef.textContent = `
//   Number of function calls: ${mouseMoveCbInvocationCounter},
//   X:${e.clientsX},
//   Y: ${e.clientsY} `;
// }

// // input and debounce
// // пока идет поток событий -функция не вызывается, как только есть промежуток
// // в потоке событий на к-во ms - сразу вызывается фу-я
// // ввод пользователя при поиске
// const inputRef = document.querySelector(".js-input");
// const outputRef = document.querySelector(".js-output");
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener("input", _.debounce(onInputChange, 2000));

// function onInputChange(e) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//   Number of function calls: ${inputCbInvocationCounter},
//   Value:${e.target.value}
//     `;
// }

// // task filter=================================================================
// // Рендер разметки элементов списка
// // Слушать элементы фильтра
// // Фильтр данных и рендер новых элементов

// const tech = [
//   { label: "HTML" },
//   { label: "CSS" },
//   { label: "JS" },
//   { label: "Node.js" },
//   { label: "react" },
//   { label: "Vue" },
//   { label: "Next.js" },
//   { label: "Mobx" },
//   { label: "Redux" },
//   { label: "React Router" },
//   { label: "GraphQl" },
//   { label: "PostgreSQL" },
//   { label: "MongoDB" },
// ];

// const refs = {
//   list: document.querySelector(".js-list"),
//   input: document.querySelector("#filter"),
// };
// // refs.input.addEventListener("input", _.throttle(onFilterChange, 300));
// refs.input.addEventListener("input", _.debounce(onFilterChange, 300));
// const listItemMarkup = createListItemMarkup(tech); //рендер исходного массива
// populateList(listItemMarkup);

// function createListItemMarkup(items) {
//   return items.map((item) => `<li>${item.label}</li>`).join("");
// }

// function onFilterChange(e) {
//   const filter = e.target.value.toLowerCase();

//   const filteredItems = tech.filter(
//     (t) => t.label.toLowerCase().includes(filter) //при вводе в инпут фильтруем массив
//   );

//   const listItemMarkup = createListItemMarkup(filteredItems); //создание новых элементов отфильтрованых
//   populateList(listItemMarkup); //старые удаляются, новые вешаются
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }

// lazy-load============================================
// feature-detection
// if ("loading" in HTMLImageElement.prototype) {
//   console.log("Браузер поддерживает ленивки");
//   const lazyImages = document.querySelectorAll('img[loading="lazy"]');
//   lazyImages.forEach((img) => {
//     img.src = img.dataset.src;
//   });
// } else {
//   console.log("Браузер не поддерживает ленивки");
//   const script = document.createElement("script");
//   script.src =
//     "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
//   script.integrity =
//     "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
//   script.crossorigin = "anonymous";
//   script.referrerpolicy = "no-referrer";
//   document.body.appendChild(script);
// }

// const lazyImages = document.querySelectorAll("img[data-src]");

// lazyImages.forEach((image) => {
//   //загрузка картинки
//   image.addEventListener("load", onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
//   //загрузка анимации
//   console.log("Loaded");
//   e.target.classList.add("appear");
// }

// Скоротить
if ("loading" in HTMLImageElement.prototype) {
  addSrcAttrToLazyImages();
} else {
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll("img[data-src]");

lazyImages.forEach((image) => {
  //загрузка картинки
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(e) {
  //загрузка анимации
  console.log("Loaded");
  e.target.classList.add("appear");
}

function addLazySizesScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossorigin = "anonymous";
  script.referrerpolicy = "no-referrer";
  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
}
