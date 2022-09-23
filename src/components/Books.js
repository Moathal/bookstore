import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

export default function Books() {
  const books = useSelector((state) => state.updateList);
  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            key={book.id}
            button="Remove"
            id={book.id}
          />
        ))}
      </ul>
      <Form />
    </>
  );
}
