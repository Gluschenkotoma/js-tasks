const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
  { hex: "#3f51b5", rgb: "63,81,181" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#00bcd4", rgb: "0,188,212" },
  { hex: "#009688", rgb: "0,150,136" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
  { hex: "#ff9800", rgb: "255,152,0" },
  { hex: "#795548", rgb: "121,85,72" },
  { hex: "#607d8b", rgb: "96,125,139" },
];
// // вариант 1
// создать колекцию разметки
const paletteContainer = document.querySelector(".js-palette");
const cardMarkup = createColorCardMarkup(colors); //рез.фу-ции создания разметки

paletteContainer.insertAdjacentHTML("beforeend", cardMarkup);
// повесить слушателя событий и посмотреть куда кликаем
paletteContainer.addEventListener("click", onPaletteContainerClick);

// // создать разметку, функция которая рендерит всю разметку============================
// function createColorCardMarkup(colors) {
//   // для каждого обьекта сделать карточку(разметку)
//   return (
//     colors
//       //   деструктиризировать с обькта свойства
//       .map(({ hex, rgb }) => {
//         //массив строк
//         return `
//     <div class="color-card">
//         <div
//             class="color-swatch"
//             data-hex="${hex}"
//             data-rgb="${rgb}"
//             style="background-color: ${hex}"
//         ></div>
//         <div class="color-meta">
//             <p>HEX: ${hex}</p>
//             <p>RGB:${rgb}</p>
//         </div>
//     </div>`;
//       })
//       //   массив строк - в 1 многострочную строку
//       .join("")
//   );
// }
// // делегирование====================================
// function onPaletteContainerClick(e) {
//   // e.target - ссылка на элемент при клике
//   // если при клике по элементу, элемент  не  содержит класс color-swatch то выходим-
//   // или: а есть ли у такого элемента, при клике,  такой клас
//   // можно записать
//   // const isColorSwatch = e.target.classList.contains("color-swatch")
//   // if(!isColorSwatch){return}console.log(e.target)}
//   // 1Проверка куда клацнули, клацнули только в swatch
//   if (!e.target.classList.contains("color-swatch")) {
//     // ф-я клика только по цвету класа color-swatch
//     return;
//   } //   а если есть делай весь остальной код
//   // 2)Получить активные карточки is-active и снимать клас is-active
//   const currentActiveCard = document.querySelector(".color-card.is-active"); //текущая активная карточка
//   // если она есть,то снять клас is - active
//   if (currentActiveCard) {
//     currentActiveCard.classList.remove("is-active");
//   }

//   //   console.log(e.target.dataset.hex); //получить при клике значения hex,#795548,#607d8b...
//   // swatchEl.classList.add("is-active"); //is-active добавится на color-swatch потому что работает if
//   const swatchEl = e.target;
//   //   const parentColorCard = swatchEl.parentNode; // parentNode - хранит ссылку на родительский класс
//   // closest- ближайший элемент с таким селектором, вверх по вложенности
//   const parentColorCard = swatchEl.closest(".color-card");
//   console.log(parentColorCard); //при клике - ссылка на <div class="color-card">…</div>, ссылка на карточку
//   parentColorCard.classList.add("is-active"); // сделаet класс .color-card.is-active активным
//   document.body.style.backgroundColor = swatchEl.dataset.hex; //поменяет цвет боди
// }

//  вариант2

// создать разметку, функция которая рендерит всю разметку============================
function createColorCardMarkup(colors) {
  // для каждого обьекта сделать карточку(разметку)
  return (
    colors
      //   деструктиризировать с обькта свойства
      .map(({ hex, rgb }) => {
        //массив строк
        return `
    <div class="color-card">
        <div
            class="color-swatch"
            data-hex="${hex}"
            data-rgb="${rgb}"
            style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB:${rgb}</p>
        </div>
    </div>`;
      })
      //   массив строк - в 1 многострочную строку
      .join("")
  );
}
// делегирование====================================
function onPaletteContainerClick(e) {
  const isColorSwatch = e.target.classList.contains("color-swatch");
  if (!isColorSwatch) {
    return;
  }

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest(".color-card");

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}
function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}
function removeActiveCardClass() {
  const currentActiveCard = document.querySelector(".color-card.is-active");

  if (currentActiveCard) {
    currentActiveCard.classList.remove("is-active");
  }
}
function addActiveCardClass(card) {
  card.classList.add("is-active");
}
