import React from 'react';

export default function Book({ title, author, button }) {
  return (
    <li>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">{button}</button>
    </li>
  );
}
