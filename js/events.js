// Получить ссылку на элемент
const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// // Повесить слушателя событий, в (действие в "..."(строка),функция - ()=>{})
// // При выполнении действия будет выполнятся функция, тоесть какой то код
// //Нашли єлемент, подписались на события на этом элементе, выполняем код
// targetBtn.addEventListener("click", () => {
//   console.log("Click");
// });

// // Именование колбеков , именование патерн======================
// // handleEvent
// targetBtn.addEventListener("click", handleClick);
// function handleClick() {
//   console.log("Click");
// }
// // handleSubjectEvent(на куда кликается)
// targetBtn.addEventListener("click", handleTargetButtonClick);
// function handleTargetButtonClick() {
//   console.log("Click");
// }
// // eventHandler
// targetBtn.addEventListener("click", clickHandler);
// function clickHandler() {
//   console.log("Click");
// }
// //subjectEventHandler(куда?- обработчик на елемент)
// targetBtn.addEventListener("click", targetButtonClickHandler);
// function targetButtonClickHandler() {
//   console.log("Click");
// }

// // onEvent(при клике)
// targetBtn.addEventListener("click", onClick);
// function onClick() {
//   console.log("Click");
// }

// // onSubjectEvent(при клике на элемент)
// targetBtn.addEventListener("click", onTargetButtonClick);
// function onTargetButtonClick() {
//   console.log("Click");
// }

// Ccылочная идентичность колбеков
addListenerBtn.addEventListener("click", () => {
  console.log("Вешаю слушателя события на целевую кнопку");
  targetBtn.addEventListener("click", onTargetBtnclick);
});
removeListenerBtn.addEventListener("click", () => {
  console.log("Снимаю слушателя события с целевой кнопки");
  targetBtn.removeEventListener("click", onTargetBtnclick);
});
function onTargetBtnclick() {
  console.log("Клик по целевой кнопке");
}
