// EVENTS
//click,
// submit - form(change,input - input:text&textarea),
// focus(blur),
// keydown(keyup,keypress)

// CLICK========================================================
// 1 кнопка
// const allBtn = document.getElementById("all");
// console.log(allBtn);

// allBtn.addEventListener("click", () => {
//   console.log(`The click event happened! `); //анонимный колбек
//   allBtn.style.background = "red";
// });

// NodeList имеет forEach, HTMLCollection - не имеет
const allBtns = document.querySelectorAll(".button"); // -> NodeList(5) [button#all.button, button.button, button.button, button.button, button.button]
// const allBtns = document.getElementsByClassName("button");  // -> HTMLCollection(5) [button#all.button, button.button, button.button, button.button, button.button, all: button#all.button]
// console.log(allBtns);
allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //   btn.style.background = "green";
    btn.classList.toggle("activeBtn");
  });
});

// (EVENT) - e, evt, event
// const allBtn = document.getElementById("all");
// console.log(allBtn); //<button type='button' class= 'button' id=all>Все</button>

// allBtn.addEventListener("click", (e) => {
// console.log(e); //тут был клик//MouseEvent {isTrusted: true, screenX: 708, screenY: 260, clientX: 668, clientY: 190, …}
// console.log(e.target); //<button type='button' class= 'button' id=all>Все</button>
// console.log(e.currentTarget); //<button type='button' class= 'button' id=all>Все</button>
// allBtn.classList.toggle("activeBtn");
// });

// INPUT============================================================
const input = document.querySelector("[type='email']");
console.log(input);

// input.addEventListener("input", (e) => {
//   console.log(e); //покажет какое событие->InputEvent {isTrusted: true, data: "t", isComposing: false, inputType: "insertText", dataTransfer: null, …}
//   console.log(e.target.value); //значение введенное в инпут, будет вызвано столько раз сколько введено символов
// });

// событие CHANGE  срабатывает когда теряется фокус
// input.addEventListener("change", (e) => {
//   console.log(e); //Event {isTrusted: true, type: "change", target: input#email.email-input, currentTarget: input#email.email-input, eventPhase: 2, …}
// }); //для чекбоксов, селектов (для инпут и текстериа - не очень хорошая практика)

// SUBMIT
const form = document.querySelector(".js-speaker-form");
console.log(form);
// form.addEventListener("submit", (e) => {
//   console.log(e);
//   e.preventDefault(); //сначала остановить дефолтные события отправки->SubmitEvent {isTrusted: true, submitter: button.btn-submit, type: "submit", target: form.subscription-box.js-speaker-form, currentTarget: form.subscription-box.js-speaker-form, …}
//   console.log(e.target.elements); //elements-элемент контроля формы->HTMLFormControlsCollection(2) [input#email.email-input, button.btn-submit, email: input#email.email-input]
//   console.log(e.target.elements.email); //<input type=email...
//   console.log(e.target.elements.email.value); //введенное значение инпута-эл.адрес
// });

// KAYDOWN===================================================
window.addEventListener("keydown", (e) => {
  console.log(e); //при нажатии Esc в консоли отобразится ->KeyboardEvent {isTrusted: true, key: "Escape", code: "Escape", location: 0, ctrlKey: false, …}
  console.log(e.code); //keyA(а eng)//код не меняется
  console.log(e.key); //a(а eng)//значение согласно ввода
});

// keypress - не происходит на системные клавиши

// FOCUS======================================================
// input.addEventListener("focus", (e) => {
//   console.log(e); //FocusEvent {isTrusted: true, relatedTarget: null, view: Window, detail: 0, sourceCapabilities: InputDeviceCapabilities, …}
//   e.target.style.background = "red";
// });
// input.addEventListener("blur", (e) => {
//   console.log(e); //разфокусировка-ЮFocusEvent {isTrusted: true, relatedTarget: null, view: Window, detail: 0, sourceCapabilities: null, …}
// });

// Зачистка слушателя событий
function handleCallback(e) {
  console.log(e);
  e.target.style.background = "green";
}
input.addEventListener("focus", handleCallback);
input.removeEventListener("focus", handleCallback);

// elem.addEventListener(eventName, callback)
// &
// elem.removeEventListener(eventName, callback)
// this=>elem
// если нужен другой контекст, bind в callback
