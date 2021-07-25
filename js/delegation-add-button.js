const container = document.querySelector(".js-containet");
container.addEventListener("click", onClick);
function onClick(evt) {
  console.log(evt); //событие клик
  // узнать ссылку на элемент где зародилось событие внутри родителя
  console.log(evt.target);
  // ссылка на элемент на котором словлено событие
  console.log(evt.currentTarget);
  // фильтр цели клика
  // nodeName-отображает элемент написаный заглавными буквами
  // логика от противного - если нет уходим(gardclose)
  //  если гардклоус(BUTTON) не равен BUTTON - выйти!
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  // console.log(evt.target.nodeName); //BUTTON,DIV
  // узнать значение єлемента на который кликнули(весь текстовый контекст без тега)
  console.log(evt.target.textContent);
}
//Код добавления кнопки
const addBtn = document.querySelector(".js-add-btn");
let labelCounter = 6;
addBtn.addEventListener("click", onAddBtnClick);
function onAddBtnClick() {
  const btn = document.createElement("button");
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = "button";

  container.appendChild(btn);
  labelCounter += 1;
}
