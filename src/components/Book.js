import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, button, id,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <p>{title}</p>
      <p>{author}</p>
      <button onClick={handleClick} type="button">{button}</button>
    </li>
  );
};

export default Book;
