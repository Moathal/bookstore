import React from 'react';
import Book from './Book';
import Form from './Form';

export default function Books() {
  return (
    <>
      <ul>
          <Book title="title" author="author" button="Remove" />
      </ul>
      <Form />
    </>
  );
}
