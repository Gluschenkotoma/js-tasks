// task1
// Функция как значение
// Функции не отличаются от чисел, строк или массивов - это просто специальный тип данных (объект высшего порядка), значение, которое можно хранить в переменной или передавать, как аргумент, в другую функцию.

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// /* Вызываем функцию greet
//    и выводим результат в консоль */
// console.log(greet("Манго"));
// // Добро пожаловать Манго.

// /* Выводим функцию greet
//    в консоль не вызывая её */
// console.log(greet);
/* 
ƒ greet() { 
     return `Добро пожаловать ${name}.`; 
} 
*/
// В первом логе мы вызываем функцию greet при помощи круглых скобок и в консоль выводится результат её выполнения. Во втором логе передаётся ссылка на функцию, а не результат её вызова (отсутствуют круглые скобки), поэтому в консоль выводится тело функции. Это значит, что функцию можно присвоить в переменную или передать, как аругмент, другой функции.

// Задание
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// Тесты
// Объявлена функция makePizza.
// Объявлена переменная result.
// Значение переменной result это строка 'Ваша пицца готовится, ожидайте.'.
// Значение переменной result получено с помощью вызова функции.
// Объявлена переменная pointer.
// Значение переменной pointer это ссылка на функцию makePizza.

// function makePizza() {
//   return "Ваша пицца готовится, ожидайте.";
// }

// const result = makePizza("Ваша пицца готовится, ожидайте.");
// console.log(result);
// const pointer = makePizza;
// console.log(pointer);

// task2
// Колбэк-функции
// Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.
// Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.

// Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внутри функции registerGuest через круглые скобки.
// Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

// Задание
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
// Тесты
// Объявлена функция deliverPizza.
// Объявлена функция makePizza.
// Объявлена функция makeMessage.
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback.
// Вызов makeMessage('Роял гранд', makePizza) возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
// Вызов makeMessage('Ультрасыр', deliverPizza) возвращает строку 'Доставляем пиццу Ультрасыр.'.

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Роял гранд", makePizza));
// console.log(makeMessage("Ультрасыр", deliverPizza));

// task3
// Инлайн-колбэки
// Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую передаём колбэк. Такая функция будет доступна только как значение параметра и больше нигде в коде.
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }
// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// Задание
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'.
// Тесты
// Объявлена функция makePizza.
// Функция makePizza принимает два параметра.
// Вторым аргументом при вызове makePizza('Ультрасыр') передана функция eatPizza с единственным параметром pizzaName.

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza("Роял гранд", function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza("Ультрасыр", function eatPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });

//  task4
// Несколько колбэков
// Функция может принимать произвольное количество колбэков. Например, представим что мы пишем логику принятия звонков для телефона. Программа должна включить автоответчик если абонент недоступен, или соединить звонок в противном случае. Доступность абонента будем имитировать генератором случайного числа, чтобы между разными вызовами функции можно было получить различные результаты.

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Манго');
// Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к двум заранее определённым действиям. Что если в будущем вместо автоответчика нужно будет оставлять голограмму?

// Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату её выполнения делать проверки и выполнять нужный код. Но проверки не относятся к внешнему коду и будут его засорять.

// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);
// Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения заранее неизвестных функций и т. п. В этом и заключается их суть - это функции предназначенные для отложенного выполнения.

// Задание
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
// Тесты
// Метод order объявляет три параметра.
// Вызов pizzaPalace.order('Аль Копчино', makePizza, onOrderError) возвращает 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
// Вызов pizzaPalace.order('Четыре нарезона', makePizza, onOrderError) возвращает 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
// Вызов pizzaPalace.order('Биг майк', makePizza, onOrderError) возвращает 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
// Вызов pizzaPalace.order('Венская', makePizza, onOrderError) возвращает 'Ошибка! В ассортименте нет пиццы с названием Венская.'.

// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }
// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order("Аль Копчино", makePizza, onOrderError));
// console.log(pizzaPalace.order("Четыре нарезона", makePizza, onOrderError));
// console.log(pizzaPalace.order("Биг майк", makePizza, onOrderError));
// console.log(pizzaPalace.order("Венская", makePizza, onOrderError));

// task5
// Задание
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.
// Тесты
// Вызов pizzaPalace.order('Аль Копчино') возвращает строку 'Заказ принят, готовим пиццу «Аль Копчино».'.
// Вызов pizzaPalace.order('Четыре нарезона') возвращает строку 'Заказ принят, готовим пиццу «Четыре нарезона».'.
// Вызов pizzaPalace.order('Биг майк') возвращает строку 'В ассортименте нет пиццы с названием «Биг майк».'.
// Вызов pizzaPalace.order('Венская') возвращает строку 'В ассортименте нет пиццы с названием «Венская».'.
// Метод checkPizza объекта pizzaPalace использует this.
// Метод order объекта pizzaPalace использует this.

// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// task6
// Задача. Аккаунт пользователя
// Задание
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.
// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
// Тесты
// Объявлена переменная customer.
// Значение переменной customer это объект со свойствами и методами.
// Вызов customer.getDiscount() возвращает текущее значение свойства discount.
// Вызов customer.setDiscount(0.15) обновляет значение свойства discount.
// Вызов customer.getBalance() возвращает текущее значение свойства balance.
// Вызов customer.getOrders() возвращает текущее значение свойства orders.
// Вызов customer.addOrder(5000, 'Steak') добавляет 'Steak' в массив значений свойства orders и обновляет баланс.
// Метод getBalance объекта customer использует this.
// Метод getDiscount объекта customer использует this.
// Метод setDiscount объекта customer использует this.
// Метод getOrders объекта customer использует this.
// Метод addOrder объекта customer использует this.

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// task7
// Метод call
// Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, при этом функция не является его методом. Для этого у функций есть методы call и apply.
// foo.call(obj, arg1, arg2, ...)
// Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст аргументы arg1, arg2 и т. д.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };

// greetGuest.call(mango, "Добро пожаловать");
// // Добро пожаловать, Манго.

// greetGuest.call(poly, "С приездом");
// // С приездом, Поли.

// Задание
// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.
// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).
// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов из массива orders с помощью цикла for.
// Тесты
// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов-заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.
// Функция composeMessage вызывается методом call внутри цикла for.
// Объявлена переменная messages.
// Значение переменной messages это массив ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   const el = composeMessage.call(orders[i], i + 1);
//   messages.push(el);
// }
// console.log(orders);
// console.log(messages);

// task8
// Метод apply
// Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.

// foo.call(obj, arg1, arg2, ...)

// foo.apply(obj, [arg1, arg2, ...])
// Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные аргументы arg1, arg2 и т. д. На практике, в основном используется метод call.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };

// greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.

// Задание
// Выполни рефакторинг кода так, чтобы функция composeMessage(position) вызывалась методом apply.
// Тесты
// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов-заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.
// Функция composeMessage вызывается методом apply.
// Объявлена переменная messages.
// Значение переменной messages это массив
// ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.',
//     'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.',
//     'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];
// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }
// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }
// console.log(messages);

// const pizzaPalace = {
//   company: "Pizza Palace",
// };

// const burgerShack = {
//   company: "Burger Shack",
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer("Манго");

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer("Поли");

// task10
// Метод bind и методы объекта
// При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции
// В строгом режиме, значение this в методе getFullName, при вызове как колбэк-функции callback(), будет undefined. При обращении к свойствам firstName и lastName будет ошибка, так как undefined это не объект.

// Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.

// // ❌ Было
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.
// Задание
// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service. Сбор статистики симулируется логированием строки. Разберись и дополни код так, чтобы он работал верно.

// Тесты
// Объявлена переменная service.
// Значение переменной service это оригинальный объект.
// Объявлена функция logAndInvokeAction(email, action).
// Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
// Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
// Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
// Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объекту service.

// const service = {
//   mailingList: ["mango@mail.com", "poly@hotmail.de", "ajax@jmail.net"],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction(
//   "kiwi@mail.uk",
//   service.subscribe.bind(service)
// );
// console.log(firstInvoke); // Почта kiwi@mail.uk добавлена в рассылку.
// console.log(
//   service.mailingList
// ); /* ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net', 'kiwi@mail.uk']*/

// const secondInvoke = logAndInvokeAction(
//   "poly@hotmail.de",
//   service.unsubscribe.bind(service)
// );
// console.log(secondInvoke); // Почта poly@hotmail.de удалена из рассылки.
// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
// =====================================
// // Приклади колбек
// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// Часто callback-функции анонимны и объявляются как стрелочные функции прямо во время передачи.

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// ===================
// Напишем функцию фильтрации элементов массива. Первый параметр array - это массив, будем перебирать его используя цикл for...of.
// Второй параметр test - это callback-функция, которую будет необходимо выполнить для каждого элемента массива.
// Функция filter создает новый массив, в который будет добавляться результат выполнения callback-функции test над каждым элементом массива array. Результатом работы функции будет массив отфильтрованных элементов.
// Если элемент массива проходит тест, то есть callback-функция возвращает true, он добавляться в отфильтрованный массив.
// Обратите внимание, функция filter, вместо удаления элементов из оригинального массива, создает новый массив только тех элементов, которые проходят тест. Это - чистая функция, она не изменяет исходные данные.
// При таком подходе мы можем выполнять фильтрацию массива по критерию используя всего одну функцию для перебора, а операции над каждым элементом будут зависеть от callback-функции.

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
// console.log(fruitsWithAmount); // массив с объектами apples и grapes

// Замыкания==========================
// const createCounter = function () {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3

// В примере функция createCounter создаёт локальную переменную privateValue, а также локальную функцию increment, которая увеличивает значение privateValue и выводит значение в консоль.
// Функция increment не содержит собственной локальной переменной privateValue, но благодаря механизму замыкания ей доступна переменная из внешнего окружения функции createCounter. В результате она может пользоваться переменной privateValue, созданной во время вызова функции createCounter, даже после того, как increment будет возвращена из вызова createCounter.
// Если заглянуть внутрь counterA и counterB используя console.dir(), наглядно видно механизм замыкания.

// 2.
// const makeShef = function (name) {
//   /*
//    * Параметр name это локальная переменная для функции makeShef.
//    * Это значит что она будет доступна функции makeDish через замыкание.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef("Mango");
// mango("apple pie"); // Mango is cooking apple pie
// mango("beef stew"); // Mango is cooking beef stew

// const poly = makeShef("Poly");
// poly("pancakes"); // Poly is cooking pancakes
// poly("eggs and bacon"); // Poly is cooking eggs and bacon

// const tamara = makeShef("Tamara");
// tamara("sushy");

// this
// Сначала создадим функцию в глобальной области видимости и вызовем ее.
// После чего присвоим ее в свойство объекта и вызовем как метод этого объекта.
// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: 'Mango' };

// /*
//  * Записываем ссылку на функцию в свойство объекта
//  * Обратите внимание, что это не вызов - нет ()
//  */
// user.showContext = showThis;

// /*
//  * Вызываем функцию в контексте объекта
//  * this будет указывать на текущий объект, в контексте
//  * которого осуществляется вызов, а не на глобальный объект.
//  */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}

// call==================
// Теперь представьте что у вас 150 отелей и для каждого необходимо выполнить ту же самую операцию при каждом приветствии гостя. Нам, как минимум, хочется сразу вынести этот общий код в функцию.
// Функция - это на самом деле довольно хитрый объект, поэтому у нее тоже есть методы. С помощью методов call и apply можно выполнить функцию в контексте какого-то объекта, не делая функцию его методом.

// const greet = function () {
//   return `Wellcome to ${this.name} hotel!`;
// };

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

// 2.
// Теперь представьте что у вас 150 отелей и для каждого необходимо выполнить ту же самую операцию при каждом приветствии гостя. Нам, как минимум, хочется сразу вынести этот общий код в функцию.
// Функция - это на самом деле довольно хитрый объект, поэтому у нее тоже есть методы. С помощью методов call и apply можно выполнить функцию в контексте какого-то объекта, не делая функцию его методом.

// const greet = function () {
//   return `Wellcome to ${this.name} hotel!`;
// };

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

// apply==========================
// fn.apply(obj, [arg1, arg2, ...])
// Copy
// Метод apply - полный аналог метода call за исключением того, что синтаксис вызова аргументов требует не перечисление, а массив.

// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.apply(hotel, ['Mango', 5]));
// // "Mango, welcome to 5-star Resort Hotel!"

// console.log(greet.apply(motel, ['Poly', 4]));
// // "Poly, welcome to 4-star Sunlight Motel!"

// bind==================================
// const boundFn = fn.bind(obj, arg1, arg2, ...)
// Copy
// Метод bind создает копию функции fn с привязанным контекстом obj и аргументами arg1, arg2 и так дале, после чего возвращает ее как результат своей работы. В результате мы получаем копию функции с привязанным контекстом, которую можно передать куда угодно и вызвать когда угодно.

// const greet = function (guest) {
//   return `${guest}, welcome to ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };

// const hotelGreeter = greet.bind(hotel, 'Mango');

// hotelGreeter(); // "Mango, welcome to Resort Hotel!"

// 2.
// Возьмем проблемный пример из предыдущей секции. Задачу привязки контекста мы теперь можем решить используя метод bind, передав функцией обратного вызова копию метода с привязанным контекстом.

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// // Передаем копию метода showThis с контекстом привязанным к hotel
// fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}
