const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
// create 1 element
// const option = colorPickerOptions[0];

// const buttonEl = document.createElement("button");
// buttonEl.type = "button";
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// console.log(buttonEl);

// Create array of buttons====================

// old method
// const colorPickerContainerEl = document.querySelector(".js-color-picker");
// const elements = [];
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   elements.push(buttonEl);
// }
// console.log(elements);
// colorPickerContainerEl.append(...elements);

// new method========================================
// const colorPickerContainerEl = document.querySelector(".js-color-picker");

// const elements = colorPickerOptions.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });
// console.log(elements);
// colorPickerContainerEl.append(...elements);

// create function==================================================
const colorPickerContainerEl = document.querySelector(".js-color-picker");
const makeColorPickerOptions = (options) => {
  return options.map((option) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("color-picker__option");
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};
const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);
console.log(colorPickerContainerEl);
