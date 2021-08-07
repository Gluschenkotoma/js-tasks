// TERMINAL
// включить терминад -> ctrl+~ || view-terminal
//pwd - текущфя директория местонахождения - PS C:\Users\Admin\Documents\GitHub\js-tasks>
//ls - количество листов в проэкте или папок на диске(ls+название папки -  покажет  какие файлы в папке);
// cd .. - выйти на уровень выше//PS C:\Users\Admin\Documents\GitHub>
// cd ../.. - выйти на 2 уровень
// cd js-tasks зайдет назад в проэкт//PS C:\Users\Admin\Documents\GitHub\js-tasks>
//`clear` || control+L - очистка
//touch - создание(touch + имя файла index.htmlcss)(создание файла в папке - touch sass\_1.scss )
// mv- переименование
// ls -l - ввыведет как список-лист

// ls -la - посмотреть все скрытые файлы
//C: перейти на диск С с любого места
// zsh (терминал зишел)
//rm удалить файл, папку(пустую)(rm sass\_1.scsssd)
// rm -rf удалит все содержимое папки с файлами( rm -rf сss - удалит папку сss и все что есть в ней)
// mkdir + foldername - создание папки (создание папки в папке - mkdir sass\cc)
//rmdir удалить папку(rmdir+ название папки)
//man ls - даст все характеристики по ls

// NODE===============================================
// node -v какая версия node установлена
console.log("Hello It's mod9-lesson17.js!");
// node + имя файла.js - запустить консоль через node(node module9-lesson17.js)

// ИНИЦИАЛИЗАЦИЯ
// npm init -> инициализация в текущей папке(если все проентерить, вконце Is this OK? (yes) y - создастся файл package.json)
// npm init -y -> сделает тоже самое , только автоматически
// package.json --> это база проэкта, метаинформация

// npmjs.com - графический интерфейс, для ознакомления с документацией каждого пакета(библиотеки)
// joi - библиотека валидации
// Установка/инсталяция
// npmjs.com --> joi --> скопировать в терминал npm i joi(i = install = инсталяция ), в package.json во вкладке dependencies добавится "joi"
// в проэкте появится папка node_modules с папкой joi, и что бы она не загружалась на github - gitignore-->
// # Dependency directories -->добавить node_modules

// УДАЛЕНИЕ ПАКЕТА
// npm remove joi(имя пакета, можно смотреть имя в package.json-dependencies)

// Работа NODE.JS, в браузере НЕ ВЫПОЛНИТСЯ!

// require("joi") --> импортировать библиотеку в код проэкта
// const Joi = require("joi");
// const passwordSchema = Joi.string().min(3).max(10).alphanum(); //схема валидации
// console.log(passwordSchema.validate("qqqq"));
// (--> node module9-lesson17.js в терминал)

//  { value: 'q',
//   error: [Error [ValidationError]: "value" length must be at least 3 characters long] {
//     _original: 'q',
//     details: [ [Object] ]
//   }
// }

// СОКРАЩЕНИЕ для команд  NPM СКРИПТЫ

// package.json-->"scripts":{}--> пишем скрипт "qwe": "echo \"Hello, this is script qwe!\"" -->
//  npm run qwe
// npm start - спец скрипт без run //"scripts": {"start": "node app.js"},--> npm start / а не npm run start
// npm test - спец скрипт без runcd

// PRE и POST скрипты
// "scripts":{
// "prestart": "echo \"Hello, this is prestart!\"", - после npm start запустится первым
// "poststart": "echo \"Hello, this is poststart!\"" - после npm start запустится третьим
//  "start": "node app.js",} - после npm start запустится вторым
// также может быть dev, predev, postdev

// NPM пакетный менеджер который состоит из 3 частей:
// 1)
// 2)
// 3)

// Пример
// "scripts":{
// "start-1": "echo \"Скрипт1\"",
// "start-2": "echo \"Скрипт2\"" ,
//  "all": "npm run start-1 && npm run start-1",}

// package-lock.json - файл зависимостей
// как зависимости зависят от зависимостей

// ЕСЛИ УДАЛИЛИСЬ ИЛИ НЕТ ПАПКИ NODE_MODULES
// npm i ||npm install  - зайдет в packaje.json - dependencies и установит все пакеты согласно библиотек

// Сделать ВЕБ-СЕРВЕР - в server.js смотреть код

// ТРАНСПИЛЯЦИЯ
// app.js код
// babeljs.io

// setup--> CLI --> в терминал скопировать npm install --save-dev @babel/core @babel/cli-->
// --> с usage скопировать в "scripts" package.json - "build": "babel src -d lib"
// (lib можно заменить на dist, это папка для транспилируемых версий кода) -->
// -->npm run build(terminal) -->указать для каких браузеров делать транспиляцию путем добавления пакета,
// с папки Create babel.config.json configuration file на babeljs.io скопировать в терминал -->
// -->npm install @babel/preset-env --save-dev
// -->vsc в корне папки сделать файл настроек babel.config.json и в него скопировать с Create babel.config.json -->
// -->{"presets": ["@babel/preset-env"]} --> и еще раз в терминале -->
// -->npm run build
// в папке dist будет файл app.js взят с src с транспилированым кодом
// В node_module добавится папка bin

//   "build": "babel src -d dist" -> src - это взять файлы с этой папки,
// транспилировать и положить в dist, флаг -d это destination

// ДЛЯ КАКИХ ВЕРСИЙ БРАУЗЕРА ПОДДЕРЖКА
// github.com/browserslist/browserslist
// создать файл настроек с скопироваными данными с browserlist - .browserslistrc
// и в него положить
// defaults
// not IE 11
// maintained node versions
//В Queries пункт 5 есть перечисление для каких браузеров делать транспиляцию, после добавления
// в файл настроек новых пунктов ограничений  npm run dev

// СБОРЩИК PARCEL https://parceljs.org
// Adding parcel to your project --> скопировать в терминал npm install parcel-bundler --save-dev-->
// -->Next, create an index.html and index.js file.
{
  /* <html>
<body>
  <script src="./index.js"></script>
</body>
</html> */
}
// -->package.json-"scripts": {- "dev": "parcel index.html>","build": "parcel build index.html>"}
// -->npm run dev

// если нужно автоматически компилировать sass в css -->
// https://parceljs.org/getting_started.html --> SCSS -->
// --> npm install -D sass
// --> файл настроек с названием .sassrc и содержимым {"includePaths": ["node_modules"]}
// -->To use sass you can import SCSS files from JavaScript files. import './custom.scss'
//--><link rel="stylesheet" href="./style.scss">

// babel, browserlist есть по умолчанию

// npm run build

// ECMASCRIPT модули
// 1. DEFAULT EXPORT экспортируется только 1 сущность
// Пример:
// export default function validatePassword(password) { return true; }
// (экспортировать с папки js, файла validate - password.js)
// import funcValidatePassword from "./js/validate-password";( сверху в index.js)

//2. ИМЕННОВАННЫЙ ЭКСПОРТ, ИМЕННОВАНЫЙ ИМПОРТ
// Пример:
//api.js
// const fetchAllUsers = () => {console.log("fetchAllUsers")};
// const fetchAllUsersById = (id) => {console.log("fetchAllUsersById")};
// const updateAllUsersById = (id) => {console.log("updateAllUsersById")};
// export default { fetchAllUsers, fetchAllUsersById, updateAllUsersById };

// index.js
// import apiService from "./js/api";

// пример именнованного експорта-импорта:
//api.js
// export const fetchAllUsers = () => {console.log("fetchAllUsers")};
// export const fetchAllUsersById = (id) => {console.log("fetchAllUsersById")};
// export const updateAllUsersById = (id) => {console.log("updateAllUsersById")};

// index.js
// import { fetchAllUsers, updateAllUsersById, x as value } from "./js/api" или
//import *as apiService from './js/api'
// console.log(apiService);//{x: 5, __esModule: true, fetchAllUsers: ƒ, fetchAllUsersById: ƒ, updateAllUsersById: ƒ}

// x as value - переименование х на value
// *as -забрать все
