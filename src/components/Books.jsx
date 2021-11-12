import React from 'react';
import { useSelector } from 'react-redux';

const Books = () => {
  const data = useSelector(state => state.books);
  
  return (
    <div>
      <h1>
        Books
      </h1>
      <ul>
        {data.books.map(book => (
          <li key={book.id}>
            <span>title: {book.title}</span>
            <span>author: {book.author} </span>
            <button id={book.id}>Delete Book {book.id}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
