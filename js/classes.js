// class Const {
//   constructor(param1 = 1, param2 = 0) {
//     this.prop1 = param1;
//     this.prop2 = param2;
//     // this.method1 = function () {
//     //   console.log(this.prop1);
//     // };нужно вынести за тело конструктора и обьявить без this
//   }
//   method1() {
//     console.log(this.prop1);
//   }
//   method2() {
//     console.log(this.prop2);
//   }
//   method3() {
//     console.log(`I'm method3`);
//   }
// }
// const classObj = new Const();
// console.log(classObj);
// classObj.method1();
// // 1
// classObj.method2();
// // 0
// classObj.method3();
// //I'm

// Example user's office on the site
class User {
  constructor(login, pass) {
    this._login = login;
    this._pass = pass;
    this._name = "user";
    this._email = "";
    this._phone = "";
    this.balance = 0;
  }
  // methods of changing the properties of the object (user)
  // after registration
  updateBalance(value = 0) {
    // value=0? - что бы не было в консоли NaN
    if (this.balance + value < 0) alert(`не достаточно средств на счету`);
    return (this.balance += value);
  }

  showLogin() {
    console.log(this.login);
  }
  updetLogin() {
    this.login = value;
  }
  // alternative methods
  // Getters and setters are used
  // to view the current property and replace it
  get login() {
    return this._login;
  }
  set login(newLogin) {
    return (this._login = newLogin);
  }
  get pass() {
    return this._pass;
  }
  set pass(newPass) {
    return (this._pass = newPass);
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
  get email() {
    return this._email;
  }
  set email(newEmail) {
    return (this._email = newEmail);
  }
  get phone() {
    return this._phone;
  }
  set phone(newPhone) {
    return (this._phone = newPhone);
  }
}

//creating a new user
const newUser = new User("login", "password");
console.log(`newUser: `, newUser);
// after registration, changing login and password
//call getter of login and password
console.log(`The current value of the getter: `, newUser.login);
console.log(`The current value of the getter: `, newUser.pass);
console.log(`The current value of the getter: `, newUser.name);
console.log(`The current value of the getter: `, newUser.email);
console.log(`The current value of the getter: `, newUser.phone);
// change login using of setter
newUser.login = `Gluschenko`;
newUser.pass = 7778;
newUser.name = `Tamara`;
newUser.email = `GluschenkoToma@ukr.net`;
newUser.phone = `+380962171307`;
console.log(`The current value of the getter: `, newUser.login);
console.log(`The current value of the getter: `, newUser.pass);
console.log(`The current value of the getter: `, newUser.name);
console.log(`The current value of the getter: `, newUser.email);
console.log(`The current value of the getter: `, newUser.phone);

newUser.updateBalance(10);
newUser.updateBalance(10);
console.log(`newUser :`, newUser);
