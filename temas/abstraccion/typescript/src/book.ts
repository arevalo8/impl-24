// src/book.ts

export class Book {
  // Propiedades privadas
  private _title: string;
  private _author: string;
  private _price: number;

  constructor(title: string, author: string, price: number) {
    this._title = title;
    this._author = author;
    this._price = price;
  }
  
  // Métodos getter y setter públicos
  public getTitle(): string {
    return this._title;
  }

  public getAuthor(): string {
    return this._author;
  }

  public getPrice(): number {
    return this._price;
  }

  public setTitle(title: string): void {
    this._title = title;
  }

  public setAuthor(author: string): void {
    this._author = author;
  }

  public setPrice(price: number): void {
    this._price = price;
  }
}
