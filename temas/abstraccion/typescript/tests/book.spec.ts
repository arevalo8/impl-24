// src/book.spec.ts

import { Book } from '../src/book';

describe('Book', () => {
  let book: Book;

  beforeEach(() => {
    book = new Book('El nombre del viento', 'Patrick Rothfuss', 20.0);
  });

  it('tiene un título', () => {
    expect(book.getTitle()).toBe('El nombre del viento');
  });

  it('tiene un autor', () => {
    expect(book.getAuthor()).toBe('Patrick Rothfuss');
  });

  it('tiene un precio', () => {
    expect(book.getPrice()).toBe(20.0);
  });

  it('puede cambiar su precio', () => {
    book.setPrice(25.0);
    expect(book.getPrice()).toBe(25.0);
  });
});
