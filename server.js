console.log("Helo World!It's server.js");
// const Joi = require("joi");
// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate("qqqqww"));

// EXPRESS
const express = require("express");

const app = express();
// вебсервер
app.use("*", (req, res) => {
  console.log("Был запрос от браузера");
  res.send("<H1>Ответ</H1>");
});
const listener = app.listen(4444, () => {
  console.log(`Веб сервер запущен на порте ${listener.address().port}`);
}); //ввести в браузер localehost4444

// terminal - node app.js
// Admin@DESKTOP-LPTUCB8 MINGW64 ~/Documents/GitHub/js-tasks (main)
// $ node app.js
// Helo World!It's app.js
// Веб сервер запущен на порте 4444
// Был запрос от браузера
