// // Исходный конструктор
// function MainUser(name = "user") {
//   this.name = name;
// }
// console.log(MainUser.prototype);
// MainUser.prototype.showName = function () {
//   console.log(this.name);
// };
// console.dir(MainUser);

// const mainUser = new MainUser();
// console.log(mainUser);
// mainUser.showName();

// // Наследуемый конструктор
// function CurrentUser(age, name) {
//   // для привязки к исходному конструктору
//   MainUser.call(this, name);
//   this.age = age;
// }

// // Наследование прототипов
// CurrentUser.prototype = Object.create(MainUser.prototype);
// // {}=Object.create({...,__proto__:{MainUser.prototype}})
// CurrentUser.prototype.constructor = CurrentUser;
// CurrentUser.prototype.updateAge = function () {
//   return (this.age += 1);
// };
// console.dir(CurrentUser);

// const currentUser = new CurrentUser(30, "Tamara");
// console.log(currentUser);
// currentUser.showName();

// Наследование прототипов у классов====================
// class MainUser {
//   constructor(name = "user") {
//     this.name = name;
//   }
//   showName() {
//     // console.log(this.name);
//   }
//   toGetSum(a, b) {
//     return a + b;
//   }
// }
// console.log(MainUser);
// console.log(MainUser.prototype);

// const mainUser = new MainUser("Tamara");
// console.log(mainUser);
// mainUser.showName();
// =====================
// Наследуемый класс
// class CurrentUser extends MainUser {
// static не передается другим класам
// static name = "Tima";
// static showClassName() {
//   console.log(this.name);
// }
// constructor(age, name) {
//   super(name);
//   this.age = age;
// }
// updateAge() {
// return (this.age += 1);
// вызвать метод исходного класа
// return super.toGetSum(this.age, 1);
//   }
// }
// const currentUser = new CurrentUser(30, "Toma");
// currentUser.showName();
// console.log(currentUser.updateAge());
// console.log(CurrentUser.name);
// currentUser.showClassName() //нельзя вызвать на экземпляре

// ===============Задачи===========
// Создать конструктор с общим набором свойств и методов для создания
// экземпляров товаров:
// свойства:title, price, category
// методы:showTitle, showCategory, updatePrice

// after prototupe======================

// function MainProduct(title = "product", category = "cat", price = 0) {
//   this.title = title;
//   this.category = category;
//   this.price = price;
// }
// MainProduct.prototype.showTitle = function () {
//   console.log(this.title);
// };
// MainProduct.prototype.showCategory = function () {
//   console.log(this.category);
// };
// MainProduct.prototype.showPrice = function () {
//   console.log(this.price);
// };

// MainProduct.prototype.updateTitle = function (value) {
//   return (this.title = value);
//   console.log(this.title);
// };
// MainProduct.prototype.updateCategory = function (value) {
//   return (this.category = value);
// };
// MainProduct.prototype.updatePrice = function (value) {
//   return (this.price = value);
// };
// // =======================================

// function WeightProduct(title, category, price, weight) {
//   MainProduct.call(this, title, category, price);
//   this.weight = weight;
// }
// WeightProduct.prototype = Object.create(MainProduct.prototype);
// WeightProduct.prototype.constructor = WeightProduct;

// WeightProduct.prototype.incrementWeight = function (value) {
//   return (this.weight += value);
// };
// WeightProduct.prototype.decrementWeight = function (value) {
// if(this.weight-value>=0)
//   return (this.weight -= value);
// };

// // єкземпляр===============
// const sugar = new WeightProduct("sugar", "sweets", 25, 1);
// console.log(sugar);

// // ==========================
// function CountProduct(count, title, category, price) {
//   MainProduct.call(this, title, category, price);
//   this.count = count;
// }
// // передача прототипа исходника
// CountProduct.prototype = Object.create(MainProduct.prototype);
// //Ссылка на самого себя
// CountProduct.prototype.constructor = CountProduct;
// // Методы
// CountProduct.prototype.incrementCount = function (value) {
//   return (this.count += value);
// };
// CountProduct.prototype.decrementCount = function (value) {
//   if(this.count>=0)
//   return (this.count -= value);
// };
// // создать екземпляр
// const mango = new CountProduct(5, "mango", "fruits", 50);
// console.log(mango);

// // after class=================
class MainProduct {
  constructor(title = "product", category = "cat", price = 0) {
    this._title = title;
    this._category = category;
    this._price = price;
  }
  get title() {
    console.log(this._title);
  }
  set title(value) {
    return (this.title = value);
    console.log(this._title);
  }

  get category() {
    console.log(this._category);
  }
  set category(value) {
    return (this._category = value);
  }

  get price() {
    console.log(this._price);
  }

  set price(value) {
    return (this._price = value);
  }
}
// ====================
class WeightProduct extends MainProduct {
  constructor(weight, title, category, price) {
    super(title, category, price);
    this.weight = weight;
  }
  incrementWeight(value) {
    return (this.weight += value);
  }
  decrementWeight(value) {
    if (this.weight - value >= 0) return (this.weight -= value);
  }
}

// =====================================
const banana = new WeightProduct(3, "ecuador", "fruits", 30);
console.log(banana);

// ========================================
class CountProduct extends MainProduct {
  constructor(count, title, category, price) {
    super(title, category, price);
    this.count = count;
  }
  incrementCount(value) {
    return (this.count += value);
  }
  decrementCount(value) {
    if (this.count - value >= 0) return (this.count -= value);
  }
}
const snickers = new CountProduct(5, "Snickers", "sweets", 22);
console.log(snickers);
