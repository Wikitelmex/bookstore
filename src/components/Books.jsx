import React from 'react';
import { useSelector } from 'react-redux';

const Books = () => {
  const data = useSelector((state) => state.books);

  return (
    <div>
      <h1>
        Books
      </h1>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            <span>title: {book.title}</span>
            <span>author: {book.author} </span>
            <button type="button" id={book.id}>Delete Book {book.id}</button>
          </li>
        ))}
      </ul>
      <form action="">
        <label htmlFor="title">
          Title
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="author">
          Author
          <input type="text" name="author" id="author" />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Books;
