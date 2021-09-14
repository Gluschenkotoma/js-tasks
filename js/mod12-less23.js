const hero = document.querySelector(".hero");
console.log(hero); //доступ на hero получен

const input = document.querySelector("[name='search']");
console.log(input); //доступ на input получен

const photoList = document.querySelector(".photoList");

// console.log(fetch); //ƒ fetch() { [native code] }
// console.dir(fetch); //ƒ fetch(), method fetch принадлежит глобальному обьекту window(belongs to the global window object )
const API_KEY = `563492ad6f91700001000001c5f4390118fe4b9888de9886a26b26a9`; //ключ доступа,(сайт пекселс - API - your API key)

// const url = `https://api.pexels.com/v1/search?query=people`; //строка запроса, есть пример в EXAMPLE OF AUTHORIZATION,
// https - протокол,не меняется
// api.pexels.com - доменное имя,не меняется
// v1 - раздел базы данных куда идем,  канал входа(end point) может менятся
// search - еще 1 уровень, структурура end point
// ?
//  query=people - квери параметры, ключ query = значение ключа, что ищем
// поэтому url делится на 2 части
//per_page - количество результатов которое мы можем получить , по умолчанию 15, макс 80
// добавить параметр per_page через & в let params = `v1/search?query=${value}`->
// -> let params = `v1/search?query=${value}&per_page=${}, в per_page=${perPage}, let perPage ставим какое нужно количество фото
let value = "lotus";
let per_page = 10;
const base_url = `https://api.pexels.com/`;
// let params = `v1/search?query=${value}&per_page=${perPage}`;
// const url = base_url + params;
const options = {
  method: "GET", //не обязательно, есть по умолчанию, свойство method содержит: в основном GET, - POST||PUT||PATCH||DELETE(методы изменения данных) - не разрешаются сайтом что бы никто ничего не изменял
  headers: { Authorization: API_KEY }, // заголовки, документация под your API key-> Authorization->This is provided by adding an 'Authorization' header.Тоесть, добавить ключ Authorization со значением API_KEY
  //   body: {}, //в методах POST||PUT||PATCH
};

input.addEventListener("change", (e) => {
  //   console.log(e.target);//инпут получен
  console.log(e.target.value); //введенное значение в поле ввода
  const { value } = e.target; //destr
  photoList.innerHTML = ""; //перед каждым новым событием зачистить список
  getFetch(value, per_page, createItems); //вызов фу-и получения запроса
  e.target.value = ""; //почистить инпут
});

//создание фу-и и указание параметров
function getFetch(search, perPage, cb) {
  let params = `v1/search?query=${search}&per_page=${perPage}`;
  const url = base_url + params;

  // coхраним в переменную метод фетч, // url - адрес куда идем - стучимся, всегда строка, options - обьект настроек которіе передаем вместе с запросом, всегда обьект
  // throw - отлавливание ошибки и передача ее в catch
  const req = fetch(url, options)
    .then((response) => {
      console.log(response); //Response {type: "cors", url: "https://api.pexels.com/v1/search?query=people", redirected: false, status: 200, ok: true, …}
      if (response.status === 200) {
        return response.json(); //если ответ статус равен 200, ответ преобразуй в файл json
      } else {
        throw new Error("ERROR"); //в противном случае вывести ошибку
      }
    })
    .then((data) => {
      console.log(data); //{page: 1, per_page: 15, photos: Array(15), total_results: 8000, next_page: "https://api.pexels.com/v1/search/?page=2&per_page=15&query=people"} получение данных
      //проверка на наличие данных в response.json
      if (data.photos.length === 0) {
        throw new Error(`По вашему запросу ничего не найдено!`); //передается в catch
      }
      return data.photos; //возврат данных которые нам нужны, а это фото
    })
    .then((photos) => {
      console.log(photos); //(50) [{…}, {…}, {…}, {…}, {…}, {/....
      //   место перебора и отрисовки полученых данных
      cb(photoList, photos); //вызов функции отрисовки данных
    })
    .catch((error) => {
      // console.log(error); //TypeError: Failed to fetch
      alert(error);
    });
}
// console.log(req); //Promise {<pending>}

// функция отрисовки данных выводится отдельно
function createItems(place, array) {
  place.style.display = "flex";
  place.style.flexFlow = "row wrap";

  let items = array
    .map((item) => {
      const {
        src: { tiny },
        photographer,
      } = item; //destruc
      return `
                <li>
                  <img src="${tiny}" alt="${photographer}" />
                  <h3>${photographer}</h3>
                </li>
              `;
    })
    .join("");
  //   console.log(items);
  place.insertAdjacentHTML("beforeend", items); //добавить в list(ul) items(li),
}
