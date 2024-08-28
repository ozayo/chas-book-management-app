import React from 'react';

function BookList({ books, setBooks, editBook }) {
  // Kitabı silme fonksiyonu
  // Function to delete a book
  const deleteBook = (title) => {
    const newBooks = books.filter(book => book.title !== title);
    setBooks(newBooks);
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} - {book.author} - {book.year}
            <button onClick={() => deleteBook(book.title)}>Delete</button>
            <button onClick={() => editBook(book)}>Edit</button>  // Düzenle butonu
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
