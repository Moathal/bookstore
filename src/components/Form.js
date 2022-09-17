import React from 'react';

export default function Form() {
  return (
    <form>
      <input placeholder="Book Title .." type="text" />
      <input placeholder="Author name .." type="text" />
      <button type="submit">Add book</button>
    </form>
  );
}
