import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, id, author, button,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <p>{title}</p>
      <p>{author}</p>
      <button onClick={handleClick} type="button">
        {button}
      </button>
    </li>
  );
};

export default Book;
