// Делегирование
// 1)Один из многих
// 2)Несколько из многих и Set

// 1;
// const TagsContainer = document.querySelector(".js-tags");
// // console.log(TagsContainer);
// TagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   // uглобальная переменная,в функции при клике в нее будет записано значение
//   let selectedTag = null;
//   // выйти если клик не по кнопке
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
//   // место по чем клацнули
//   console.log(evt.target);
//   // что бы сделать один из многих активных нужно при каждом клике проверить,
//   // если у нас есть 1 из предыдущих активный элемент (tags__btn--active),
//   // то мы должны с него снять(tags__btn--active)
//   const currentActiveBtn = document.querySelector(".tags__btn--active");
//   console.log(currentActiveBtn);
//   // снять клас если он уже активный
//   // если currentActiveBtn - есть(true), то снять с него класс
//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn--active");
//   }
//   // Это замена if
//   // если в currentActiveBtn? что то есть,не null и не underfined то выполнит удаление класса,
//   //если  currentActiveBtn? null или  underfined, то прервется.
//   // Используется при доступе к свойству
//   // currentActiveBtn?.classList.remove("tags__btn--active");

//   // добавить клас что бы выделяло кнопку цветом при клике
//   // evt.target.classList.add("tags__btn--active");//1 вариант
//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add("tags__btn--active");
//   // заначение выделеного тега
//   selectedTag = nextActiveBtn.dataset.value;
//   //   console.log(selectedTag);
// }

// 2
const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set(); //набор уникальных элементов

tagsContainer.addEventListener("click", onTagsContainerClick);
// как хранить выбраные значения
// const selectedTags = [];

function onTagsContainerClick(evt) {
  // проверяем что мы кликнули не в кнопку, если не в кнопку - уходим
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("tags__btn--active");
  // если на текущем элементе уже есть класс isActive(tags__btn--active),
  //то из сета удалить тег который кликнули, если нет isActive - добавить в сет тег,
  // и в любом случае сделать btn.classList.toggle("tags__btn--active");
  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  // если класс есть то - снимет, если нет добавит
  btn.classList.toggle("tags__btn--active");

  // запушить в const selectedTags = [] при клике значение data-value
  // dataset - свойство которое хранит лист всех дата атрибутов с html(data-value="html"),
  // data-value="html" -> dataset.value, в консоли - -> html

  //   selectedTags.push(evt.target.dataset.value);//при выделении и снятии добавит в массив -const selectedTags = []
  //   selectedTags.add(evt.target.dataset.value); //только добавляет но не дублируется

  // при выделении тега - добавить в массив, при снятии тега-удалить с массива
  console.log(selectedTags);
}

// проверка а если есть а если есть===========================
const settings = {
  theme: {
    userDefined: {
      color: "qwqw",
    },
  },
};
if (settings && settings.theme && settings.theme.userDefined) {
  //   console.log(settings.theme.userDefined.color);
}
// замена if
//если settings это обьект,тогда у него возьми свойство theme, если theme это обьект,
// возьми у него свойство свойство userDefined и если userDefined это обьект возьми у него color;
settings?.theme?.userDefined?.color;
// console.log(settings?.theme?.userDefined?.color);
