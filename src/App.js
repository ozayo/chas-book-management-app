import React, { useState, useEffect } from 'react';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null); // Düzenlenen kitabın durumunu tutacak

  // LocalStorage'dan kitapları yükleme
  // Loading books from LocalStorage
  useEffect(() => {
    const loadedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(loadedBooks);
  }, []);

  // Kitap listesinde herhangi bir değişiklik olduğunda localStorage'a kaydetme
  // Save to LocalStorage whenever the book list changes
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const editBook = (book) => {
    setEditingBook(book); // Düzenlenecek kitabı ayarla
  };

  return (
    <div className="App">
      <h1>Book Management App</h1>
      <BookForm setBooks={setBooks} books={books} editingBook={editingBook} setEditingBook={setEditingBook} />
      <BookList books={books} setBooks={setBooks} editBook={editBook} />
    </div>
  );
}

export default App;
