import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { httpRequestDeleteBook, httpRequestAddBook, fetchBooks } from '../redux';
import './Books.css';

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
    category: 'history',
  });

  return bookData.loading ?
    (
      <div> Loading... </div>
    ) : bookData.error ?
      (
        <div> error {bookData.error} </div>
      ) : (
        <div>
          {
            bookData &&
            bookData.books &&
            bookData.books.map((book) => {
              return (
                <div className='card card-body me-5 ms-5 mb-3 d-flex flex-row justify-content-around' key={book.item_id}>
                  <div className='d-flex flex-column col-3 lh-sm'>
                    <span className='ms-2 fs-6 text-black-50'>{book.category}</span>
                    <span className='ms-2 fs-3 fw-bold'>{book.title}</span>
                    <span className='ms-2 text-primary'>{book.author} </span>
                    <div class="btn-group btn-group-sm bg-transparent mt-3" role="group" aria-label="Basic outlined example">
                      <button type="button" class="btn btn-outline-transparent text-primary border-end">Comments</button>
                      <button type="button" class="btn btn-outline-transparent text-primary border-end" onClick={() => deleteBook(book.item_id)}>Remove</button>
                      <button type="button" class="btn btn-outline-transparent text-primary">Edit</button>
                    </div>
                  </div>
                  <div className='ms-4 col-3 border-end d-flex flex-row align-items-center'>
                    <div class="progress blue">
                      <span class="progress-left">
                        <span class="progress-bar">
                        </span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar">
                        </span>
                      </span>
                    </div>
                    <div className='lh-sm d-flex flex-column'>
                      <span className='fs-3 fw-bold'>90%</span>
                      <span className='text-black-50'>Completed</span>
                    </div>
                  </div>
                  <div className='col-3 d-flex flex-column justify-content-around'>
                    <span className='text-black-50'>Current Chapter</span>
                    <span className='text-black'>Chapter 17</span>
                    <button className='btn btn-primary btn-sm text-white-50'>UPDATE PROGRESS</button>

                  </div>

                </div>
              )
            })
          }
          <hr className='text-muted me-5 ms-5' />
          <h4 className='text-muted ms-5'>ADD NEW BOOK</h4>
          <form className='me-5 ms-5 d-flex flex-row justify-content-between'>
            <label htmlFor="title" className='col-6 me-1'>
              <input
                placeholder='Book title'
                type="text"
                className='form-control'
                name="title" id="title"
                value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
            </label>

            <label htmlFor="category" className='me-1 col-3'>
              <select 
                class="form-select" 
                aria-label=".form-select-lg example"
                value={book.category} onChange={(e) => setBook({ ...book, category: e.target.value })}
                >
                <option selected value="history">history</option>
                <option value="fiction">fiction</option>
                <option value="reading">reading</option>
              </select>

            </label>
            <button
              type="button"
              className='btn btn-primary me-1'
              onClick={() => {
                addBook(book);
                setBook({ title: '', category: '' });
              }}
            >
              <span className='me-5 ms-5'>Add Book</span>
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
