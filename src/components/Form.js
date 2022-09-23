import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [details, setDetails] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.title !== '' && details.author !== '') dispatch(addBook(details));
    setDetails({ title: '', author: '' });
  };

  const onChange = ((e) => {
    const input = e.target;
    if (input.name === 'title') setDetails((prev) => ({ ...prev, title: input.value }));
    if (input.name === 'author') setDetails((prev) => ({ ...prev, author: input.value }));
  });

  return (
    <form onSubmit={submitHandler}>
      <input onChange={onChange} value={details.title} name="title" placeholder="Book Title .." type="text" />
      <input onChange={onChange} value={details.author} name="author" placeholder="Author name .." type="text" />
      <button type="submit">Add book</button>
    </form>
  );
}

export default Form;
