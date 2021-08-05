// EVENTS
//click,
// submit - form(change,input - input:text&textarea),
// focus(blur),
// keydown(keyup,keypress)

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
console.log(allBtns);
allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //   btn.style.background = "green";
    btn.classList.toggle("activeBtn");
  });
});

// elem.addEventListener(eventName, callback)
// &
// elem.removeEventListener(eventName, callback)
// this=>elem
// если нужен другой контекст, bind в callback
