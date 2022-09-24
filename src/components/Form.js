import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './Form.css';

function Form() {
  const [details, setDetails] = useState({
    title: '',
    author: '',
    category: 'Action',
    item_id: null,
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.title !== '' && details.author !== '') dispatch(addBook(details));
    setDetails({ title: '', author: '', category: 'Action' });
  };

  const onChange = ((e) => {
    const input = e.target;
    if (input.name === 'title') setDetails((prev) => ({ ...prev, title: input.value, item_id: uuidv4() }));
    if (input.name === 'author') setDetails((prev) => ({ ...prev, author: input.value, item_id: uuidv4() }));
  });

  return (
    <form className="Form" onSubmit={submitHandler}>
      <input
        className="Lesson-Panel1"
        onChange={onChange}
        value={details.title}
        name="title"
        placeholder="Book Title .."
        type="text"
      />
      <input
        className="Lesson-Panel2"
        onChange={onChange}
        value={details.author}
        name="author"
        placeholder="Author name .."
        type="text"
      />
      <button className="Rectangle-2" type="submit">
        <span className="ADD-BOOK Text-Style">ADD BOOK</span>
      </button>
    </form>
  );
}

export default Form;
