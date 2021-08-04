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
const logoByTag = document.querySelector("span"); //получение доступа по тегу
console.log(logoByTag);
