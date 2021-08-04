import data from "../js/data/socials-links.js";
// console.log(data);//(4) [{…}, {…}, {…}, {…}]

function createItems(arr) {
  // создать ul
  const listUl = document.createElement("ul");
  listUl.className = "socials-list list";

  const arrOfLi = arr.map((el) => {
    console.log(el); //{class: "item footer-item", link: {…}, icon: {…}}
    //{class: "item footer-item", link: {…}, icon: {…}}
    //{class: "item footer-item", link: {…}, icon: {…}}
    //{class: "item footer-item", link: {…}, icon: {…}}
    console.log(el.class); //item footer-item,item footer-item,item footer-item,item footer-item

    const item = document.createElement("li");
    // console.log(item); //<li></li>
    item.className = el.class;
    console.log(item); //<li class="item footer-item"></li>
    console.log(item.classList); //колекция DOMTokenList(2) ["item", "footer-item", value: "item footer-item"]

    const link = document.createElement("a");
    console.log(link); // <a></a>
    link.setAttribute("href", el.link.href); //<a href = "#"></a>
    link.classList.add(el.link.class); //<a href="#" class="link"></a>
    link.setAttribute("aria-label", el.link.ariaLabel); //<a href="#" class="link" aria-label="ссылка на ..."></a>

    const icon = document.createElement("svg");
    icon.classList.add(el.icon.class);

    const iconUse = document.createElement("use");
    iconUse.setAttribute("href", el.icon.href);

    //   встраивание элементов согласно разметки
    item.append(link);
    link.append(icon);
    icon.append(iconUse);

    return item;
  });

  listUl.append(...arrOfLi);
  return listUl;
}
const listUl = createItems(data);

const slWrapper = document.querySelector(".sl-wrapper");
slWrapper.append(listUl);
