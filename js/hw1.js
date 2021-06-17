// module 1
// task6
// Магазин по продаже ремонтных дроидов готов к открытию,
// осталось написать скрипт для их заказа.Объяви переменные
// и присвой им соответствующие значения:

// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth <total price>
// credits.Delivery(<delivery fee> credits) is included in total price."
// Тесты
// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 6
// Объявлена переменная pricePerDroid
// Значение переменной pricePerDroid это число 800
// Объявлена переменная deliveryFee

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits.
 Delivery (${deliveryFee} credits) is included in total price.`;

//  task7
// Объяви функцию sayHi, внутри которой добавь console.log() со строкой
// "Hello, this is my first function!".
// После объявления вызови функцию sayHi.

// Тесты
// Ожидается объявление функции
// Функции присвоено имя sayHi
// В теле функции sayHi есть console.log("Hello, this is my first function!")
// После объявления есть вызов функции sayHi
function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();

// task8
// Функция add должна уметь складывать три числа и выводить результат в консоль.
// Добавь функции add три параметра a, b и c,
// которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>",
//  где < result > это сумма переданных чисел.

// Тесты
// Объявлена функция add(a, b, c)
// Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
// Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
// Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// task9
// Дополни код функции add так,
// чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// Тесты
// Объявлена функция add(a, b, c)
// В функции add есть оператор return
// Вызов add(15, 27, 10) возвращает 52
// Вызов add(10, 20, 30) возвращает 60
// Вызов add(5, 10, 15) возвращает 30
// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// task10
//Объявлена функция makeMessage(name, price)
// Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
// Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
// Вызов makeMessage('Reactor', 8000) возвращает "You picked Reactor, price per item is 8000 credits"
// Вызов makeMessage('Engine', 4070) возвращает "You picked Engine, price per item is 4070 credits"
function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;

  console.log(message);
  return message;
}
makeMessage("Radar", 6150);
makeMessage("Scanner", 3500);
makeMessage("Reactor", 8000);
makeMessage("Engine", 4070);

// task11
