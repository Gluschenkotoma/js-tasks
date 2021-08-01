// keyboard
const refs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};
// повесить слушателя события клавиатуры на окно
window.addEventListener("keydown", onKeypress);
function onKeypress(event) {
  // ловит просто любые нажатия на клавиатуре
  console.log(`event`, event);
  // показывает что нажали
  console.log(`event.key`, event.key);
  console.log(`event.code`, event.code);
  // ввод на клавиатуре
  //   refs.output.textContent += event.key;
}

// очистить ввод с клавиатуры
// refs.clearBtn.addEventListener("click", onClearOutput);
// function onClearOutput() {
//   refs.output.textContent = "";
// }

// // mouse
// const boxRef = document.querySelector(".js-box");
// boxRef.addEventListener("mouseenter", onMouseEnter);
// boxRef.addEventListener("mouseleave", onMouseLeave);
// boxRef.addEventListener("mouseover", onMouseEnter);
// boxRef.addEventListener("mouseout", onMouseLeave);

// boxRef.addEventListener("mousemove", onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add("box--active");
// }
// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove("box--active");
// }
// function onMouseMove(event) {
//   console.log(event);
// }
