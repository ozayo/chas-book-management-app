import React, { useState, useEffect } from 'react';

function BookForm({ setBooks, books, editingBook, setEditingBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBook) {
      const updatedBooks = books.map(book =>
        book.title === editingBook.title ? { title, author, year: parseInt(year) } : book
      );
      setBooks(updatedBooks);
      setEditingBook(null); // Düzenleme modundan çık
    } else {
      const newBook = { title, author, year: parseInt(year) };
      setBooks([...books, newBook]);
    }
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <div>
      <h2>{editingBook ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book name" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
        <button type="submit">{editingBook ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default BookForm;
