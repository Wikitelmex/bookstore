import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, addBook } from '../redux';

const Books = () => {
  const data = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

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
            <button type="button" onClick={() => dispatch(deleteBook(book.id))}>Delete Book</button>
          </li>
        ))}
      </ul>

      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
      </label>
      <label htmlFor="author">
        Author
        <input type="text" name="author" id="author" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} />
      </label>
      <button
        type="submit"
        onClick={() => {
          dispatch(addBook(book));
          setBook({ title: '', author: '' });
        }}
      >
        Add Book
      </button>

    </div>
  );
};

export default Books;
