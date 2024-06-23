// src/book.ts

// Definición de la clase Book
export class Book {
  // Propiedades privadas y readonly para inmutabilidad
  private readonly _title: string;
  private readonly _author: string;
  private _price: number;

  // Constructor para inicializar las propiedades
  constructor(title: string, author: string, price: number) {
    this._title = title;
    this._author = author;
    this._price = price;
  }

  // Métodos getter para acceder a las propiedades
  public get title(): string {
    return this._title;
  }

  public get author(): string {
    return this._author;
  }

  public get price(): number {
    return this._price;
  }

  // Método setter para cambiar el precio
  public set price(newPrice: number) {
    this._price = newPrice;
  }

}
