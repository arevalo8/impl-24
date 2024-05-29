// book.spec.ts

import { Book } from '../src/book';

describe('Book', () => {
  let book: Book;

  beforeEach(() => {
    book = new Book('El nombre del viento', 'Patrick Rothfuss', 20.0);
  });

  it('tiene un título', () => {
    expect(book.title).toBe('El nombre del viento');
  });

  it('tiene un autor', () => {
    expect(book.author).toBe('Patrick Rothfuss');
  });

  it('tiene un precio', () => {
    expect(book.price).toBe(20.0);
  });

  it('puede cambiar su precio', () => {
    book.price = 25.0;
    expect(book.price).toBe(25.0);
  });
});
