// // Действие браузера по умолчаниюбсобытие сабмит, ==========================
// свойство елементс, класс формдата
// const form = document.querySelector(".js-register-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   // предотвращение перезагрузки
//   event.preventDefault();

//   //currentTarget- сылка на  элемент который прослушивают
//   //elements-все элементы формы
//   //console.dir(event.currentTarget.elements.subscription.value);

//   const formData = new FormData(event.currentTarget);
//   console.log(formData);
//   formData.forEach((value, name) => {
//     console.log(name);
//     console.log(value);
//   });
// }

// Патерн обьект ссылок=========================================
// const input = document.querySelector(".js-input");
// const nameLabel = document.querySelector(".js-button > span");
// const license = document.querySelector(".js- license");
// const btn = document.querySelector(".js-button");

// const refs = {
//   input: document.querySelector(".js-input"),
//   nameLabel: document.querySelector(".js-button > span"),
//   license: document.querySelector(".js- license"),
//   btn: document.querySelector(".js-button"),
// };

// task События ====================================
// События для ввода текста input - focus, blur, input
// change

// const refs = {
//   input: document.querySelector(".js-input"),
//   nameLabel: document.querySelector(".js-button > span"),
//   licenseCheckbox: document.querySelector(".js-license"),
//   btn: document.querySelector(".js-button"),
// };

// // refs.input.addEventListener("focus", onInputFocus);
// // refs.input.addEventListener("blur", onInputBlur);
// // refs.input.addEventListener("change", onInputChange);
// // refs.input.addEventListener("input", onInputChange);

// refs.input.addEventListener("input", onInputChange);
// refs.licenseCheckbox.addEventListener("change", onLicenseChange);

// function onInputFocus() {
//   console.log("Инпут получил фокус - событие focus");
// }
// function onInputBlur() {
//   console.log("Инпут потурял фокус - событие blur");
// }
// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   // меняет текст в спане на то что вводится в инпут
//   refs.nameLabel.textContent = event.currentTarget.value;
// }
// function onLicenseChange(event) {
//   // вкл/выкл
//   console.log(event.currentTarget.checked);
//   // кнопка выключена когда элемент не выбран
//   // (при нажатии засвечивает кнопку зарегистрироваться)
//   refs.btn.disabled = !event.currentTarget.checked;
// }
