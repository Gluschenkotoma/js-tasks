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

// НАСТРОИЙКИ LOADERS
// добавить в  webpack.config.js --> module: { rules: [{},{},{}],}, //массив обьектов правил
// Loaders--> loaders section -->css-loader-->npm install --save-dev css-loader(toterm)
// webpack.config.js в module.exports = {} в rules: [] добавить обьект
//   rules: [
//       {
//         test: /\.css$/i,        //тест, регулярное выражение, все файлы с окончанием css(формат файла)
//         use: [ ""style-loader", css-loader"],   //взято с "devDependencies": { "css-loader": "^6.2.0",...
//       },
//     ],
// a также загрузить style-loader -->npm install --save-dev style-loader

// ДОБАВИТЬ БАБЕЛ В ВЕБПАК
// https://babeljs.io/setup ->webpack -->npm install --save-dev babel-loader @babel/core(toterm)
// скопировать в бабел для webpack.config.js-rules[] {
// //      {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//       },

// сделать babel.config.json в корне проєкта , внего --{
//   "presets": ["@babel/preset-env"]
// }

// и npm install @babel/preset-env --save-dev(в терминал)

//создать в src --> папку css в нем -->common.css -->body{
//     background-color: #fff;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// }
// импортировать в index.js --> import "./css/common.css";

// DEVSERVER
// DevServer-->webpack-dev-server-->скопировать в терминалnpm install webpack-dev-server --save-dev(Getting Started)
// With NPM Scripts --> "webpack serve" заменить в скриптах с webpack на "webpack serve"
//  "scripts": {
//     "dev": "webpack serve --mode=development",
//     "prod": "webpack --mode=production"
//   },

// npm run dev для проверки

// настройки: webpack.config.js в module.exports = {} добавить
// devServer: {
//  open:'true',     //для автозапуска ливсервера
//  stats: 'errors-only',//(что бы мусорки не было, чистка терминала)
//   port: 9000,     //если нужно поменять 8080 на другой номер ливсервера
//  },

// ДОБАВИТЬ SASS
// sass-loader --> npm install sass-loader sass -D
//  webpack.config.js-rules[]
// rules: [
//   {
//     test: /\.scss$/i,..
//В use: ["style-loader", "css-loader"], добавить "sass-loader" = use: ["style-loader", "css-loader", "sass-loader"],
// common.css поменять на common.scss

// CONCEPTS-PLAGINS-HtmlWebpackPlugin INDEX.HTML
//npm install --save-dev html-webpack-plugin
// basic usage -->const HtmlWebpackPlugin = require('html-webpack-plugin'); --> to webpackconfig
// webpackconfig-->module.exports--> add plugins:[] -->plagins: [new HtmlWebpackPlugin()](basic usage)
// удалить с dist index.html
// Переместить с корня index.html в src
// webpackconfig-->module.exports-->добавить в plugins изменения ({ template: "src/index.html" })= plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],

//ПЛАГИН MiniCssExtractPlugin выкинуть СSS в отдельный файл MAIN.CSS
//npm install --save-dev mini-css-extract-plugin
// импортнуть в конфигурацию const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// в конфиге use: ["style-loader", "css-loader", "sass-loader"], перед "css-loader" добавить MiniCssExtractPlugin.loader=
// =use: ["style-loader",MiniCssExtractPlugin.loader,"css-loader","sass-loader",],
//инициализация плагина -->Loader Options-->String-->to webpack.config.js-->
// new MiniCssExtractPlugin({}),   -->в папке dist появится main.css
// new MiniCssExtractPlugin({ filename: "styles.css" }), - дает возможность выкидать  файл с *названием
// при добавлении в папку css других файлов и import "./css/*.scss"; в результирующем файле с *названием в папке dist - будет сборка всех свойств

// CLEAN WEBPACK PLUGIN -очищение dist перед запуском
// npm install --save-dev clean-webpack-plugin
//вставить импорт в webpackconfig --> const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// инициализировать в plugins --> new CleanWebpackPlugin() = plugins: ...,  new CleanWebpackPlugin()],

// postcss-loader АВТОПРЕФИКСИЕР
//npm install --save-dev postcss-loader postcss дальше не показал

// gs
// gcm github
// gp -u +name
