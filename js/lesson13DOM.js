// console.log(document); //покажет всю станицу и структуру документа
// console.dir(document); //global objekt, документ со свойствами
// console.log(document.body); //ссылка на боди со всей розметкой внутри
// console.log(document.parentNode); //null. потому что родителя нет в document
// console.log(document.body.parentNode); //html, потому то body является 1 из 2 вложеных тегов в html
// console.log(document.childNodes); //псевдомассив(недомассив)Nodelist-> 0: <!DOCTYPE html>, 1: html;length: 2
// console.log(document.children); //псевдомассив HTMLCollection [html]-> 0: html;length: 1, единственный ребенок html
// console.log(document.body.children); //HTMLCollection(9) [header.page-header, main, footer.footer-page,
// //div.is - hidden.backdrop, script, script, script, script, script], все теги 1 уровня вложенности

// console.log(document.firstChild); //<!DOCTYPE html>
// console.log(document.firstElementChild); //<html>

// console.log(document.lastChild); //<html>
// console.log(document.lastElementChild); //<html>

// console.log(document.previousSibling); //null, у документа нет предыдущего соседа слева
// console.log(document.body.previousSibling); // сосед слева - текстовый узел -> #text
// console.log(document.parentElementSibling); //underfined

// console.log(document.nextSibling); //null, у документа нет предыдущего соседа справа
// console.log(document.body.nextSibling); //null у боди нет следующего соседа
// console.log(document.nextElementSibling); //underfined

// Получить ссылку, query=запрос
// получение доступа по тегу
const logoByTag = document.querySelector("span"); //<span class="text header-logj" id='headerLogo'>Web<\span>
// console.log(logoByTag);

// получение доступа по ID
const logoByIdquery = document.querySelector("#headerLogo");
// console.log(logoByIdquery); //<span class="text header-logj" id='headerLogo'>Web<\span>
const logoById = document.getElementById("headerLogo");
// console.log(logoById); //<span class="text header-logj" id='headerLogo'>Web<\span>

// получение доступа по класу
const logoByClass = document.querySelector(".text");
// console.log(logoByClass); //<span class="text header-logj" id='headerLogo'>Web<\span>

// получение доступа по атрибуту
const logoByAttribute = document.querySelector('[href="./index.html"');
// console.log(logoByAttribute); //<a href="./index.html" class="logo"></a>

// доступ к группе элементов по тегу
const allLinksByTag = document.querySelectorAll("a");
// console.log(allLinksByTag); //псевдомассив колекции эл-в NodeList(36)[(a.logo,a.link,a.link,...a.checkbox - link)];

// доступ к группе элементов по ID
// document.querySelectorAll(#id) // не актуально по причине уникальности идентификатора

// доступ к группе элементов по классу
const allLinksByClass = document.querySelectorAll(".link");
// console.log(allLinksByClass); //NodeList(27) [a.link, a.link, a.link, a.link,...]
const allLinksByClassName = document.getElementsByClassName("link");
// console.log(allLinksByClassName); //HTMLCollection(27) [a.link, a.link, a.link...]

// доступ к группе элементов по атрибуту
const allElemsSrcByAttr = document.querySelectorAll("[src]");
// console.log(allElemsSrcByAttr); //NodeList(11) [img, img, img, img, img, img, img, script, script, script, script]

// properties of NODES
// attributes=>properties
// id,name,value,checked,src,href,hidden,etc...
// console.dir(logoByTag);
// console.log(logoByTag.id); //headerLogo - прямой доступ к значению идентификатора
// console.log(logoByTag.classList); //DOMTokenList(2) ["text", "header-logo", value: "text header-logo"]
// console.log(logoByTag.className); //text header-logo

// attribute =>pseudoArray===================================
// console.log(logoByTag.attributes); //масивоподобный обьект ->NamedNodeMap {0: class, 1: id, class: class, id: id, length: 2}
// get
// проверить есть ли у елемента какой то атрибут, возвращает true / false
// console.log(logoByTag.hasAttribute("name")); //false
// console.log(logoByTag.hasAttribute("id")); //true

// если аттрибут есть - взять это значение
// console.log(logoByTag.getAttribute("id")); //headerlogo

// если атрибута нет, можно добавить
logoByTag.setAttribute("name", "logo-span");
// проверка
// console.log(logoByTag.hasAttribute("name")); //true
// console.log(logoByTag.getAttribute("name")); //logo-span
// console.log(logoByTag.attributes); //NamedNodeMap {0: class, 1: id, 2: name, class: class, id: id, name: name, length: 3}
// удалить атрибут
logoByTag.removeAttribute("name");
// console.log(logoByTag.hasAttribute("name")); //false, logoByTag не имеет атрибута 'name'
// console.log(logoByTag.attributes); //NamedNodeMap {0: class, 1: id, class: class, id: id, length: 2}

// data -attributes ->атрибуты разработчика =====================
// data-attr  -> data- неизменная часть;  atrr - ключ;
// dataset = {attr:value}
logoByTag.setAttribute("data-myAttr1", "user");
logoByTag.setAttribute("data-myAttr2", "30");
logoByTag.setAttribute("data-myAttr3", "js");
// console.log(logoByTag.attributes); //NamedNodeMap {0: class, 1: id, 2: data-myattr1, 3: data-myattr2, 4: data-myattr3, class: class, id: id, data-myattr1: data-myattr1, data-myattr2: data-myattr2, data-myattr3: data-myattr3, …}
// console.dir(logoByTag); //есть свойство dataset в котором хранятся только датаатрибуты, поэтому к нему можно обратится напрямую
// console.log(logoByTag.dataset); //DOMStringMap {myattr1: "user", myattr2: "30", myattr3: "js"}
// console.log(logoByTag.dataset.myattr1); //user
// console.log(logoByTag.dataset.myattr2); //30
// console.log(logoByTag.dataset.myattr3); //js

// textcontent==================================================
// console.dir(logoByTag); //хранит свойство textContent
// console.log(logoByTag.textContent); //Web
// logoByTag.textContent = "WEB"; //изменить значение textContent с Web на WEB(в браузере тоже)

//свойство style -> хранит все стили которые задаются в css
// logoByTag.style.color = "blue"; //инлайновый стиль,css не перебьет, кроме important

// classList====================================================
// console.log(logoByTag.className);
// console.log(logoByTag.classList);
logoByTag.classList.remove("header-logo"); //удалить клас
logoByTag.classList.add("header-logo"); //добавить класс
// logoByTag.classList.toggle("header-logo"); //если есть удалить класс, если нет добавит класс
// console.log(logoByTag.classList.contains("header-logo")); //есть такой класс или нет?
logoByTag.classList.replace("header-logo", "iHavebillion"); //переименовать класс

// Создание логотипа============================================
//   <a href="./index.html" class="logo">
//   <span class="text header-logo" id="headerLogo">Web</span>
//   Studio
//   </a>
const headerLogoLink = document.createElement("a");
// console.log(headerLogoLink); //<a></a>
headerLogoLink.setAttribute("href", "./studio.html");
// console.log(headerLogoLink.attributes); //NamedNodeMap {0: href, href: href, length: 1}
headerLogoLink.classList.add("logo");
// console.log(headerLogoLink.classList); //DOMTokenList ["logo", value: "logo"]
headerLogoLink.textContent = "Studio";
// console.log(headerLogoLink.textContent); //Studio

const logoSpan = document.createElement("span");
// console.log(logoSpan); //<span></span>
logoSpan.classList.add("text");
logoSpan.classList.add("header-logo");
logoSpan.textContent = "Web";

const logoParent = document.getElementById("logo-parent");
// console.log(logoParent); //ссылка на div c ID = logo-parent
logoParent.appendChild(headerLogoLink); //добавит Studio в конец div(в конец родителя)
logoParent.prepend(headerLogoLink); //добавит Studio в начало div(в начало родителя)
// headerLogoLink.prepend(logoSpan); //добавить <span> в <a> (1 способ)
headerLogoLink.insertAdjacentElement("afterbegin", logoSpan);
// console.log(headerLogoLink);//добавить <span> в <a> (2 способ)

// parent.insertAdjacentElement("beforeend", child); //->beforeend
// parent.insertAdjacentElement("afterend", child); //-> afterend
// parent.append(...children); // ->beforeend
// parent.after(...children); // -> afterend

// parent.replaceWith(child, nextElem);
// parent.insertBefore(child, nextElem);

// удаление элементов================================================================

const slWrapper = document.querySelector(".sl-wrapper");
const slTitle = document.querySelector(".title-link");
// slWrapper.removeChild(slTitle);//1
// slTitle.remove();

// клонировать элемент ===============================================================
// true - with children
// false - without children

const footerLogoLink = headerLogoLink.cloneNode(true);
// console.log(footerLogoLink);
// footerLogoLink.style.color = "white";
footerLogoLink.classList.replace("logo", "home-page");

const footerLogoParent = document.getElementById("footer-logoParent");
// console.log(footerLogoParent);
footerLogoParent.prepend(footerLogoLink);

// as string===========================================================================
const className = "address-text";
const footerAdress = `<address class=${className}>
            <span class="text">г. Киев, пр-т Леси Украинки, 26</span>
            <a href="mailto:info@example.com" class="link">info@example.com</a>
            <a href="tel:+380991111111" class="link">+38 099 111 11 11</a>
          </address>`;

// console.log(footerAdress);
footerLogoParent.insertAdjacentHTML("beforeend", footerAdress);

// add elements to HTML
// parent.innerHTML = child

// parent.insertAdjacentHTML('beforebegin', child)//child встроится вначало родителя
// parent.insertAdjacentHTML('afterbegin', child)//child встроится за пределы  родителя (перед родителем)
// parent.insertAdjacentHTML('beforeend', child)//child встроится вконце родителя
// parent.insertAdjacentHTML('afterend', child)////child встроится за пределы  родителя
