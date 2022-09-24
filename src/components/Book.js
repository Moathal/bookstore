import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = ({
  title, id, author, button,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="Lesson-Panel">
      <div className="column">
        <p className="Title">{title}</p>
        <p className="author">{author}</p>
        <div className="row">
          <span className="Comments">Comments</span>
          <button className="Remove" onClick={handleClick} type="button">
            {button}
          </button>
          <span className="Edit">Edit</span>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <div className="Rectangle-3">
            <div className="Oval-2" />
          </div>
          <div className="column">
            <span className="-Percent-Complete">30%</span>
            <span className="Completed Text-Style-2">Completed</span>
          </div>
        </div>
        <div className="column">
          <span className="Current-Chapter">Current Chapter</span>
          <span className="Current-Lesson Text-Style-4">Chapter 7</span>
          <div className="Rectangle-2">
            <span className="Update-progress">Update progress</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Book;
