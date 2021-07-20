// // чистая функция
const arr = [1, 2, 3, 4, 5];
// function pureFunc(array, value) {
//   const resultArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     let result = array[i] * value;
//     // console.log("result :", result);
//     resultArray.push(result);
//   }
//   return resultArray;
// }
// // вернули новый масив
// console.log("результат чистой функции", pureFunc(arr, 2));
// //изначальный глобальный массив, он не тронут
// console.log("исходный массив", arr);

// // функция с побочным эфектом
// function dirtyFunc(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     array[i] = array[i] * value;
//   }
//   return array;
// }
// // грязная функция вернула исходный перезаписанный массив
// console.log("результат грязной функции ", dirtyFunc(arr, 5));
// console.log("исходный массив", arr);
// // на каждой итерации происходит перезапись
// // нет ячейки памяти что бы
// // сохранялся результат работы вызова этой функции

// перебирающие (функциональные) методы массива===========================

// forEach - метод не возвращает результат,не создает яйейку памяти
// кроме как записать в переменную, подобие грязной функции
// Используется для вешания слушателей
// array.method((element,index,array)) => sesult
// array.method((element,index,array)) => { return sesult}
// element - это всегда итерируемый обьект!!!!!!элемент обьекта.
// arr.forEach((el, ind, ar) =>
//   console.log("Элемент :", el, "индекс :", ind, "массив:", ar)
// );

// const forEachArray = [];
// const result = arr.forEach((el, ind, ar) => {
//   forEachArray.push(el * 2);
//   return el;
// });
// //console.log(result)- ничего не возвращает- underfined

// console.log(forEachArray);

// MAP ==================================================================
// срез, занимает отдельную ячейку памяти по итерируемый обьект(el)
const students = [
  { name: "Anna", age: 23 },
  { name: "Alla", age: 17 },
  { name: "Andrey", age: 43 },
  { name: "Anton", age: 28 },
];
// const studentAge = students.map((el) => el.age);
// console.log(studentAge);- (4) [23, 25, 43, 28]
const studentAge = students.map((el) => el.age + 1);
// console.log(studentAge); -(4)[(24, 26, 44, 29)];

// FILTER==================================================================
// всегда вначале создает массив
//может проверить все элементы и ничего не записать в [],
// оставит его пустым;

// // найти студентов до 18 лет
// const studentsTo18 = students.filter((el) => el.age < 18);
// console.log(studentsTo18);
// // найти студентов после 18 лет
// const studentsBy18 = students.filter((el) => el.age >= 18);
// console.log(studentsBy18);

// // функция проверки массивов
// // Вернуть массив имен если возвраст
// // 1) больше 50,
// // 2) или больше 18,
// //или "Не один элемент не прошел проверку!"
// function arrayCheck(arr, value) {
//   const result = arr.filter((el) => el.age >= value);
//   if (result.length === 0) {
//     return "Не один элемент не прошел проверку!";
//   }
//   return result.map((el) => el.name);
// }
// console.log(arrayCheck(students, 50));
// console.log(arrayCheck(students, 18));

// FIND===========================================================
// Найти 1 элемент
// underfined- усли не нашел ни одного совпадения
// занимает ячейку памяти но массив не создает

// const to18 = students.find((el) => el.age < 18);
// const by18 = students.find((el) => el.age >= 18);
// const to50 = students.find((el) => el.age >= 50);

// console.log(to18);
// console.log(by18);
// console.log(to50);

// // REDUCE===========================================================
// //возвращает массив, обьект, число , строку

// // array.reduce((acc,el)=>{},  []) --> []
// // array.reduce((acc,el)=>{},  {}) --> {}
// // array.reduce((acc,el)=>{},  0) --> number
// // array.reduce((acc,el)=>{},  '') --> string
// // [],{},0,'' -  начальное значение для акамулятора
// // асс - локальная переменная метода reduce
// // el-элемент массива

// // возврат числа
// let reduceResult = arr.reduce((acc, el) => {
//   console.log("aкамулятор :", acc, "элемент :", el);
//   acc += el;
//   return acc;
// }, 0);
// console.log("reduceResult :", reduceResult);

// // //Кратко
// let reduceResult1 = arr.reduce((acc, el) => (acc += el), 0);
// console.log("reduceResult1 :", reduceResult1);

// //создать клон массива
// const reduceClon = arr.reduce((newArray, number) => {
//   newArray.push(number);
//   return newArray;
// }, []);
// console.log("arr: ", arr);
// console.log("reduceClon :", reduceClon);
// console.log(arr === reduceClon); -> false

// // EVERY================================================================
// // array.every((el)=>{}) true, если все true|| false - &&
// // Все четные элементы?
// let isEvery = arr.every((el) => el % 2 === 0);
// console.log(isEvery);

// // Some=================================================================
// // array.some((el)=>{}) false, если все false || true - ||
// // Хоть 1 элемент четный?
// let isSome = arr.some((el) => el % 2 === 0);
// console.log(isSome);
// let isSome1 = arr.some((el) => el % 2 > 5);
// console.log(isSome1);

// SORT===================================================================
const names = ["anna", "tamara", "taras"];
console.log(names.sort());

const numbers = [2, 23, 3, 4, 55, 89, 41, 2, 1];
console.log(numbers.sort((min, max) => min - max));
console.log(numbers.sort((min, max) => max - min));
