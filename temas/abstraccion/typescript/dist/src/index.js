"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var book_1 = require("./book");
// Crear una instancia de Book y usarla
var myBook = new book_1.Book('El nombre del viento', 'Patrick Rothfuss', 20.0);
console.log("Book: ".concat(myBook.title, ", Author: ").concat(myBook.author, ", Price: $").concat(myBook.price));
//# sourceMappingURL=index.js.map