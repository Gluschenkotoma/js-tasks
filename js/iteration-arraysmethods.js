import users from "./data/users.js";
// console.log(users);
// task1
// найти уник числа
const numbers = [1, 4, 6, 8, 4, 1, 2, 1, 3, 41];
const numbers1 = [1, 4, 6, 8, 4, 1, 2, 1, 3, 41, 1];
const words = ["hello", "js", "js", "html", "node"];
function getUniqueValues(arr) {
  console.log(arr);
  // массив результатов проверок
  const newArr = [];
  //перебираем масив numbers и words
  for (let i = 0; i < arr.length; i++) {
    //   Если итерируемый элемент arr[i] нет в нашем масиве newArr,
    //   то пушим его в newArr
    let item = arr[i];
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}
// console.log("result task1", getUniqueValues(numbers));
// console.log("result task1", getUniqueValues(words));

// 2
function getUnVal(arr) {
  return arr.filter((el, idx, array) => array.indexOf(el) === idx);
}
// console.log(getUnVal(numbers));
// console.log(getUnVal(words));

//  task2
// удалить уникальные(не повторяющиеся) с массива

function deleteUnicValues(arr) {
  // console.log(arr);
  const x = [];
  for (let i = 0; i < arr.length; i++) {
    //    console.log(arr[1]);
    let item = arr[i];
    if (x[item] === undefined) {
      x[item] = 0;
    }
    x[item] += 1;
  }
  console.log(x);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(`'значение исходника': ${arr[i]} - повторений ${x[arr[i]]}`);
    if (x[arr[i]] > 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(deleteUnicValues(numbers));
// console.log(deleteUnicValues(words));

// 2 (по элементу)
function delUnVal(arr) {
  //   console.log(arr);
  return arr.filter((el, idx, array) => {
    // console.log(`'текущий индекс', ${array.indexOf(el)}`);
    // console.log(`'последний индекс', ${array.lastIndexOf(el)} `);
    let currentIdx = array.indexOf(el);
    let lastIdx = array.lastIndexOf(el);
    //   let condition = !(array.indexOf(el) === idx)
    //       || !(array.lastIndexOf(el) === idx)
    let condition = currentIdx !== lastIdx;
    return condition;
  });
}
// console.log(delUnVal(numbers));

// 4 (по идикс)
function delUnVal2(arr) {
  //   console.log(arr);
  return arr.filter((el, idx, array) => {
    let firstIdx = array.indexOf(el);
    let lastIdx = array.lastIndexOf(el);
    let condition = (!(firstIdx === idx) || !(lastIdx === idx)) && true;
    return condition;
  });
}
// console.log(delUnVal2(numbers));
// console.log(delUnVal2(words));

// 3
const delUn = (arr) =>
  arr.filter((el, idx, array) => array.indexOf(el) !== array.lastIndexOf(el));
// console.log(delUn(numbers));
// console.log(delUn(words));

// task3 mediana of array==========================
//
function getMiddlevalue(arr) {
  //   console.log(arr.length); //всего 10 элементов
  //   console.log(arr);
  // вывести среднее арифметическое
  //   let average = arr.reduce((total, el) => total + el / arr.length, 0);
  //   console.log("average", average); //6.54
  // yзнать парное или не парное количество єлементов в массиве
  // в случае если массив с парным количеством элементов
  if (arr.length % 2 === 0) {
    // вывод длинны половины элементов
    console.log(arr.length / 2); //5
    //   вывод индексов соседних элементов
    let prevElIdx = arr.length / 2 - 1; //4
    let nextElIdx = arr.length / 2; //5
    //   значения элементов по индексу
    // console.log("prevElIdx", prevElIdx, "nextElIdx", nextElIdx);
    // console.log("сумма 2 средних элементов :", arr[prevElIdx] + arr[nextElIdx]);
    let sum = arr[prevElIdx] + arr[nextElIdx];
    let middleValue = sum / 2;
    return middleValue;
  }
  // в случае если массив с не парным количеством элементов
  if (arr.length % 2 !== 0) {
    // вывод длинны
    // console.log(arr.length);
    // //   найти средний элемент в массиве, заокруглить до среднего элемента
    // console.log(Math.floor(arr.length / 2));
    let idx = Math.floor(arr.length / 2);
    return arr[idx];
  }
}
getMiddlevalue(numbers1);

// task4=======================================================
// 4-1-1
// найти родившихся в 19 веке //1800-1899
function getScByBorn(arr) {
  //   console.log(arr);
  return arr.filter((el) => {
    //   деструктуризировать born
    const { born } = el;
    // console.log(born); //вывод значений ключей born(1879,1643...)
    // console.log(born, born >= 1800 && born < 1900); //вывод диапазона
    if ((born, born >= 1800 && born < 1900)) {
      return el;
    }
  });
}
// console.log(getScByBorn(users));
// 4-1-2 кратко - карированая функция
const getByBorn = (arr) =>
  arr.filter(({ born }) => born >= 1800 && born < 1900);
// console.log(getByBorn(users));

// 4-2-1
// найти суму лет сколько прожили все ученые
function getTotalAge(arr) {
  //   console.log(arr);
  // acc - акамулятор отсчета 0
  // el - итерируемый элемент
  return arr.reduce((acc, el) => {
    const { born, dead } = el;
    //   вывод года рождения и смерти
    // console.log("el.born -", born, "el.dead -", dead);
    // let age = dead - born;
    // //   вывод  года рождения, смерти, количества прожитых лет age
    // console.log("born -", born, "dead -", dead, "lived :", age);
    //    возврат общего количества прожитых лет всех ученых
    return acc + age;
  }, 0);
}
// console.log(getTotalAge(users));
// 4-2-2
const getTotalAge2 = (arr) =>
  arr.reduce((acc, { born, dead }) => acc + (dead - born), 0);
// console.log(getTotalAge2(users));

// 4-3-1
// Oтсортировать по имени
function sortByName(arr) {
  console.log(arr);
  return arr.sort((a, z) => {
    let fullName = `${a.surname} ${a.name}`;
    return a.name.localeCompare(z.name);
  });
}
console.log(sortByName(users));
