// function  expression constructor
const Constructor = function (param) {
  this.prop = param;
};
const newObj = new Constructor("my param");
console.log(newObj);
console.dir(Constructor);

// function declaration  constructor
function Const(param1 = 1, param2 = 0) {
  this.prop1 = param1;
  this.prop2 = param2;
  this.method1 = function () {
    console.log(this.prop1);
  };
  // Метод 1 личное свойство, занимает много места и будет отображатся в каждом новом созданом обьекте
}
console.log(Const.prototype);
Const.prototype.method2 = function () {
  // Метод2 будет хранится в прото и будет доступен по ссылке всем новым обьектам. не будет занимать место
  console.log(this.prop2);
};
Const.prototype.method3 = function () {
  // Метод3 будет хранится в прото и будет доступен по ссылке всем новым обьектам. не будет занимать место
  console.log(`I method3`);
};

const newObj2 = new Const("my param1", "my param2");
console.log(newObj2);
newObj2.method1();
// my param1
newObj2.method2();
// my param2
newObj2.method3();
// I method3

const newObj3 = new Const();
console.log(newObj3);
newObj3.method1();
// 1
newObj3.method2();
// 0
newObj2.method3();
// I method3
