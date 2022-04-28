// function clickButton() {
//   console.log(this);
// }

// button.addEventListener("click", clickButton);

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     // this = customer
//     return this.balance; // return customer.balance
//   },
//   getDiscount() {
//     // this
//     return this.discount;
//   },
//   setDiscount(value) {
//     // this
//     this.discount = value;
//   },
//   getOrders() {
//     // this
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     // this
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// showThis(); // this in showThis: Window // use strict => undefined

// const user = {
//   username: "Mango",
//   // showContext: function showThis() {
//   //   console.log("this in showThis: ", this);
//   // },
// };

// user.showContext = showThis; // user.showContext = function showThis() {
//   // console.log("this in showThis: ", this);
// // }
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// "use strict";

// function showThis() {
//   console.log(this);
// }

// showThis();

// window.showThis()
// function test() {
//   console.log("test", this);
// }

// const arrow = () => {
//   console.log("arrow", this);
// };

// test();
// arrow();

// const foo = () => {
//   console.log(this);
// };

// foo();

// const user = {
//   name: "Bob",
//   age: 12,
//   test: () => {
//     console.log("this1", this);
//   },

//   // test() {
//   //   console.log("this1", this);
//   // },

//   test2() {
//     console.log("this2", this); // user

//     const test3 = () => {
//       console.log("this3", this); // user
//     };
//     test3();
//   },

//   test2: () => {
//     console.log("this2", this); // window

//     const test3 = () => {
//       console.log("this3", this); // window
//     };
//     test3();
//   },
// };

// user.test();
// user.test2(); // this = user

// # Модуль 5. Занятие 9. Контекст вызова функции и this

// ## Example 1 - Мастерская драгоценностей

// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

// ```js
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       (stone) => stone.name === stoneName
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// ```

// ## Example 2 - Телефонная книга

// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// ```js
// const phonebook = {
//   contacts: [],
//   add: (contact) => {
//     console.log("this", this);
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// const phonebook = {
//   name: "book1",
//   contacts: [],
//   add(contact) {
//     console.log("this", this);
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// const phonebook2 = {
//   name: "book2",
//   contacts: [],
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add.call(phonebook2, {
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// });

// console.log([1, 2, 3, 4, 5]);

// function getUserName(user) {
//   return user.name;
// }

// const user = {
//   name: "Bob",
// };

// const admin = {
//   name: "John",
// };

// const superUser = {
//   name: "Jack",
// };

// console.log(getUserName(admin));

// call - coma
// apply - array

// const method = phonebook.add;

// method.call(phonebook, {
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// });

// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook);
// console.log(phonebook2);

// ```

// ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(4, 5);
// console.log(calculator.add());
// console.log(calculator.mult());

// console.log(calculator);

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.

// ```js
// const calculator = {};
// ```

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// students.map(
//   function (student) {
//     console.log(this);
//   },
//   { name: "Bob" }
// );

// const allCourses = students.flatMap((student) => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// course = математика
// index = 0
// array = allCourses
// allCourses.indexOf(математика) === 0
// 0 === 0 // true
// [математика]

// course = фізика
// index = 1
// array = allCourses
// allCourses.indexOf(фізика) === 1
// 1 === 1 // true
// [математика, фізика]

// course = інформатика
// index = 2
// array = allCourses
// allCourses.indexOf(інформатика) === 2
// 2 === 2 // true
// [математика, фізика, інформатика]

// course = математика
// index = 3
// array = allCourses
// allCourses.indexOf(математика) === 3
// 0 === 3 // false
// [математика, фізика, інформатика]
////////////////////////////////////////////////////////////////////////////////

// class User {
//   constructor(name, age) {}
// }

// const user = new User("Bob", 12);

// class Admin {
//   constructor({ name, age }) {}
// }

// const admin = new Admin({ name: "John", age: 13 });

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   //   getEmail() {
//   //     return this.#email;
//   //   }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });

// console.log(mango);
// console.log(mango.name);
// console.log(mango.email);
// mango.email = "user@gmail.com";
// console.log(mango.email);
// console.log(mango.#email);
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email);

// class User {
//   #percent;

//   constructor(percent) {
//     this.#percent = percent;
//   }

//   get percent() {
//     return this.#percent;
//   }
// }

// class Admin extends User {
//   #percent;
//   constructor(percent) {
//     super();
//     this.role = "Admin";
//   }

//   set percent(value) {
//     this.#percent = value;
//   }
// }

// const user = new User(20);
// console.log(user);

// const admin = new Admin(30);
// admin.percent = 40;
// console.log(admin);

// function User(name, age) {
//   // this - {}
//   this.name = name;
//   this.age = age;
//   // return this
// }

// User.prototype.getName = function () {
//   return this.name;
// };

// class User {
//   constructor(name, age) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//     // this.getName = function () {
//     //   return this.name;
//     // };
//     // return this
//   }
//   getName() {
//     return this.name;
//   }

//   static showConsole() {
//     console.log("aaaaaa");
//   }

//   getInfo() {
//     this.showConsole();
//   }
// }

// class Student extends User {
//   constructor(name, age, group) {
//     super(name, age); // constructor з класа User
//     this.group = group;
//   }
// }

// const user = new User("Bob", 12);
// const user2 = new User("John", 22);
// user.getInfo();
// User.showConsole();
// const student = new Student("Jack", 24, "FS47");

// console.log(user);
// console.log(user2);
// console.log(student);

// # Модуль 5. Занятие 10. Прототипы и классы

// ## Example 1 - Блоггер

// Напиши класс `Blogger` для создания обьекта блоггера со следующим свойствами:

// - `email` - почта, строка
// - `age` - возраст, число
// - `numberOfPosts` - кол-во постов, число
// - `topics` - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод `getInfo()`, который, возвращает строку:
// `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.

// Добавь метод `updatePostCount(value)`, который в параметре `value` принимает
// количество постов которые нужно добавить пользователю.

// class User {
//   constructor({ email, age, numberOfPosts, topics }) {
//     // this = {}
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   // {
//   //     emai, age, number, topics
//   // }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }

//   // {
//   //     emai, age, number, topics
//   // prototype: {getInfo, update}
//   // }

//   // return this
// }

// // ```js
// const mango = new User({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango);

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   email: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// ```

// ## Example 2 - Хранилище

// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив товаров.
// - `addItem(item)` - получает новый товар и добавляет его к текущим.
// - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     if (!this.items.includes(item)) {
//       return "Товар відсутній на складі";
//     }

//     this.items = this.items.filter((el) => el !== item);
//   }
// }

// // ```js
// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// ```

// ## Example 3 - User

// Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
// Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
// геттер и сеттер `login` и `email`.

// class User {
//   #login;
//   #email;
//   constructor({ email, login }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(value) {
//     this.#login = value;
//   }
// }

// // ```js
// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ```

// ## Example 4 - Заметки

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// class Notes {
//   constructor(items) {
//     this.items = items;
//   }

//   static Priority = { LOW: "low", NORMAL: "normal", HIGH: "high" };

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items = this.items.filter((item) => item.text !== text);
//   }

//   updatePriority(newText, newPriority) {
//     this.items = this.items.map((item) =>
//       item.text === newText ? { ...item, priority: newPriority } : item
//     );
// }
// item.text === newText
// true
// {...item, priority: newPriority }

// const user = {
//   name: "Bob",
//   age: 15,
// };

// const user2 = {
//   ...user,
//   age: 45,
// };

// {name: 'Bob', age: 45}

// }

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// Добавь методы `addNote(note)`, `removeNote(text)` и
// `updatePriority(text, newPriority)`.

// ```js
// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя вторая заметка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя первая заметка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);
// console.log(myNotes.items);
// ```

// ## Example 5 - Toggle

// Напишите класс `Toggle` который принимает объект настроек `{isOpen: boolean}` и
// объявляет одно свойство `on` - состояние вкл/выкл (true/false). По умолчанию
// значение свойства `on` должно быть `false`.

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// ```

// const user = {
//   name: "Bob",
//   age: 23,
//   getInfo() {
//     return `${this.name} and ${this.age}`;
//   },
//   prototype: {
//     ChangeEmail() {
//       this.email;
//     },
//   },
// };

// user.prototype.ChangeEmail

// console.log(user);

// const user2 = {
//   name: "Jack",
//   age: 35,
// };

// const getInfoForUser2 = user.getInfo.bind(user2);

// console.log(getInfoForUser2);

// console.log(user.getInfo.call(user2));
// console.log(getInfoForUser2());

// console.log(user.getInfo());
