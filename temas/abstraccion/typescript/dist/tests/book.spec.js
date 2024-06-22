"use strict";
// book.spec.ts
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../src/book");
describe('Book', function () {
    var book;
    beforeEach(function () {
        book = new book_1.Book('El nombre del viento', 'Patrick Rothfuss', 20.0);
    });
    it('tiene un título', function () {
        expect(book.title).toBe('El nombre del viento');
    });
    it('tiene un autor', function () {
        expect(book.author).toBe('Patrick Rothfuss');
    });
    it('tiene un precio', function () {
        expect(book.price).toBe(20.0);
    });
    it('puede cambiar su precio', function () {
        book.price = 25.0;
        expect(book.price).toBe(25.0);
    });
});
//# sourceMappingURL=book.spec.js.map