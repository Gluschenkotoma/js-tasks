// Webpack https://webpack.js.org

// 1.Точка входа - ENTRY - js файл с которого начинается построение графозависимостей
// 2.OUTPUT точка выхода/вывода - папка з готовым кодом продакшен, артифакт сборки
// 3.Загрузчик - LOADERS - применяются к каждому файлу отдельно
// 4.PLAGINS - расширения, 99,9% применяются после того как вебпак собрал файлы, к результирующей сборке

// Guides - Gettin Started
// В проэкте - в терминал npm init (package.json) и npm install webpack webpack-cli --save-dev
// добавить в проэкт в корень index.html, src/index.js
// создать файл конфигурации webpack.config.js с Using a Configuration скопировать название и добавить в него :
// 1.В файл webpack.config.js записать module.exports = {};(для добавления параметров)
// 2.С Documentation -> Entry - > добавить entry: './src/index.js', откуда строить дерево зависимостей, точка входа
// 3.С Documentation -> Entry - const path = require('path');
// 4.output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'my-first-webpack.bundle.js',
//   },
// 5. mode: "development" сверху- // НЕ ХВАТАЕТ РЕЖИМА СБОРКИ WARNING!

// package.json
// 1.
//  "scripts": {
//     "build": "webpack"
//   },
//  npm run build

// или 2. Скопировать webpack --mode=development с Mode->Usage-->
// --> "scripts": {
//     "dev": "webpack --mode=development",
//     "prod": "webpack --mode=production"
//   },
// npm run dev||npm run prod (Будет разница в весе файла)

// DEVSERVER
// DevServer-->webpack-dev-server-->
