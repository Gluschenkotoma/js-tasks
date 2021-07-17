import products from "./data/products.js";
console.log(products);
// Сделать обьект
// const product = {
//   name: "Сервоприводы",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsum!",
//   price: 2000,
//   available: true,
//   onSale: true,
// };
// const productEl = document.createElement("article");
// productEl.classList.add("product");

// const nameEl = document.createElement("h2");
// nameEl.textContent = product.name;
// nameEl.classList.add("product__name");

// const descrEl = document.createElement("p");
// descrEl.textContent = product.description;
// descrEl.classList.add("product__descr");

// const priceEl = document.createElement("p");
// priceEl.textContent = `ЦенаЖ ${product.price} кредитов`;
// priceEl.classList.add("product__price");

// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);

// Сделать массив обьектов
// получить ссылку на див
const productContainerEl = document.querySelector(".js-products");

// функция для создания 1го элемента
const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const nameEl = document.createElement("h2");
  nameEl.textContent = name;
  nameEl.classList.add("product__name");

  const descrEl = document.createElement("p");
  descrEl.textContent = description;
  descrEl.classList.add("product__descr");

  const priceEl = document.createElement("p");
  priceEl.textContent = `Цена ${price} кредитов`;
  priceEl.classList.add("product__price");

  productEl.append(nameEl, descrEl, priceEl);
  return productEl;
};
// console.log(makeProductCard(products[3]));
// для каждого элемента массива products вызови
// эту функцию (makeProductCard)
const elements = products.map(makeProductCard);
console.log(elements);
// собрать гроздь
productContainerEl.append(...elements);
