import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addStatus } from '../redux/categories/categories';
import './categories.css';

export default function Categories() {
  const status = useSelector((state) => state.updateCategories);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addStatus())} type="button">
        Check Status
      </button>
      {status.map((current) => (
        <h2 key={uuidv4()}>{current}</h2>
      ))}
    </>
  );
}
