import express, { Request, Response } from 'express';
import { Book } from './book';

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Lista de libros inicial
let books: Book[] = [
  new Book('El nombre del viento', 'Patrick Rothfuss', 20.0),
  new Book('El temor de un hombre sabio', 'Patrick Rothfuss', 25.0),
  new Book('Juego de Tronos', 'George R.R. Martin', 30.0)
];

// Ruta para obtener todos los libros
app.get('/books', (req: Request, res: Response) => {
  res.json(books);
});

// Ruta para agregar un nuevo libro
app.post('/books', (req: Request, res: Response) => {
  const { title, author, price } = req.body;
  if (typeof title !== 'string' || typeof author !== 'string' || typeof price !== 'number') {
    return res.status(400).json({ message: 'Invalid data' });
  }

  const newBook = new Book(title, author, price);
  books.push(newBook);
  res.status(201).json(newBook);
});

// Ruta para obtener un libro por título
app.get('/books/:title', (req: Request, res: Response) => {
  const title = req.params.title;
  const book = books.find(b => b.title === title);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Ruta para eliminar un libro por título
app.delete('/books/:title', (req: Request, res: Response) => {
  const title = req.params.title;
  const initialLength = books.length;
  books = books.filter(b => b.title !== title);
  
  if (books.length < initialLength) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Ruta raíz
app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenido a la API de libros. Use /books para ver la lista de libros.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
