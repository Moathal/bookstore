import { createAsyncThunk } from '@reduxjs/toolkit';

const RETRIEVE_BOOKS = 'Books/books/fulfilled';
const ADD_BOOK = 'Books/books/ADD_BOOK/fulfilled';
const REMOVE_BOOK = 'Books/books/REMOVE_BOOK/fulfilled';
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QbiwMijYAaROk7cu8aO/books/';
const initialState = [];

export const postBooks = createAsyncThunk('Books/books', async () => {
  const value = await fetch(API).then((res) => res.json());
  const books = Object.keys(value).map((each) => ({
    ...value[each][0],
    item_id: each,
  }));
  return books;
});

export const addBook = createAsyncThunk('Books/books/ADD_BOOK', async (book, { dispatch }) => {
  await fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  dispatch(postBooks());
});

export const removeBook = createAsyncThunk('Books/books/REMOVE_BOOK', async (id, { dispatch }) => {
  await fetch(API + id, { method: 'DELETE' });
  dispatch(postBooks());
});

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, { ...payload }];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== payload);
    case RETRIEVE_BOOKS:
      return payload;
    default:
      return state;
  }
};
