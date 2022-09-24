import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { postBooks } from '../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.updateList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postBooks());
  }, []);
  return (
    <>
      <ul className="BooksList">
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            button="Remove"
            id={book.item_id}
          />
        ))}
      </ul>
      <Form />
    </>
  );
}
