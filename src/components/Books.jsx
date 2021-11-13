import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { httpRequestDeleteBook, httpRequestAddBook, fetchBooks } from '../redux';

const Books = ({
  bookData,
  fetchBooks,
  deleteBook,
  addBook
}) => {
  useEffect(() => {
    fetchBooks();
  }, []);
  const [book, setBook] = useState({
    title: '',
    category: '',
  });

  return bookData.loading ?
    (
      <div> Loading... </div>
    ) : bookData.error ?
      (
        <div> error {bookData.error} </div>
      ) : (
        <div>
          <h1>
            Books
          </h1>
          {
            bookData &&
            bookData.books &&
            bookData.books.map((book) => {
              return (
                <div key={book.item_id}>
                  <span>title: {book.title}</span>
                  <span>category: {book.category}</span>
                  <span>author: {book.author} </span>
                  <button type="button" onClick={() => deleteBook(book.item_id)} >Delete Book</button>
                </div>
              )
            })
          }
          <form>
            <label htmlFor="title">
              Title
              <input
                type="text"
                name="title" id="title"
                value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
            </label>
            <label htmlFor="category">
              Category
              <input
                type="text"
                name="category"
                id="category"
                value={book.category} onChange={(e) => setBook({ ...book, category: e.target.value })} />
            </label>
            <button
              type="button"
              onClick={() => {
                addBook(book);
                setBook({ title: '', category: '' });
              }}
            >
              Add Book
            </button>
          </form>
        </div>
      );
};

const mapStateToProps = (state) => {
  return {
    bookData: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    deleteBook: (id) => dispatch(httpRequestDeleteBook(id)),
    addBook: (book) => dispatch(httpRequestAddBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
