// src/index.ts
import { Book } from './book';


// Crear una instancia de Book y usarla
const myBook = new Book('El nombre del viento', 'Patrick Rothfuss', 20.0);
console.log(`Book: ${myBook.title}, Author: ${myBook.author}, Price: $${myBook.price}`);
