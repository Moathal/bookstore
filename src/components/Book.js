import React from 'react';

export default function Book({ title, author, button }) {
  return (
    <>
      <li>{title}</li>
      <li>{author}</li>
      <button type="button">{button}</button>
    </>
  );
}
