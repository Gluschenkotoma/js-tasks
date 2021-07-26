// Приемы throtling и debouncing с Lodash
// _throttle - вызывай функцию не чаще чем (функция, к-во милисекунд)
// скрол,ресайз(изменение размера окна), перетаскивание(дреги)
const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCbInvocationCounter = 0;

const throtleOnMauseMove = _.throttle(onMouseMove, 500);
window.addEventListener("mousemove", throtleOnMauseMove);

function onMouseMove(e) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
  Number of function calls: ${mouseMoveCbInvocationCounter},
  X:${e.clientsX},
  Y: ${e.clientsY} `;
}

// input and debounce
// пока идет поток событий -функция не вызывается, как только есть промежуток
// в потоке событий на к-во ms - сразу вызывается фу-я
// ввод пользователя при поиске
const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCbInvocationCounter = 0;

inputRef.addEventListener("input", _.debounce(onInputChange, 2000));

function onInputChange(e) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
  Number of function calls: ${inputCbInvocationCounter},
  Value:${e.target.value}
    `;
}

// task filter=================================================================
// Рендер разметки элементов списка
// Слушать элементы фильтра
// Фильтр данных и рендер новых элементов

const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JS" },
  { label: "Node.js" },
  { label: "react" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};
// refs.input.addEventListener("input", _.throttle(onFilterChange, 300));
refs.input.addEventListener("input", _.debounce(onFilterChange, 300));
const listItemMarkup = createListItemMarkup(tech); //рендер исходного массива
populateList(listItemMarkup);

function createListItemMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilterChange(e) {
  const filter = e.target.value.toLowerCase();

  const filteredItems = tech.filter(
    (t) => t.label.toLowerCase().includes(filter) //при вводе в инпут фильтруем массив
  );

  const listItemMarkup = createListItemMarkup(filteredItems); //создание новых элементов отфильтрованых
  populateList(listItemMarkup); //старые удаляются, новые вешаются
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
