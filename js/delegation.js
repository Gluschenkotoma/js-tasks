const container = document.querySelector(".js-containet");
container.addEventListener("click", onClick);
function onClick(evt) {
  console.log(evt);
  // узнать ссылку на элемент где зародилось событие
  console.log(evt.target);
  // ссылка на элемент на котором словлено событие
  console.log(evt.currentTarget);
  // логика от противного - gardclose
  //  если гардклоус(BUTTON) не равен BUTTON - выйти!
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  // название элемента,тега, пишется заглавными
  console.log(evt.target.nodeName);
  // узнать значение єлемента на который кликнули(весь текстовый контекст без тега)
  console.log(evt.target.textContent);
}
