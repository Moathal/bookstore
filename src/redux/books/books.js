import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'Books/books/ADD_BOOK';
const REMOVE_BOOK = 'Books/books/REMOVE_BOOK';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, { ...payload, id: uuidv4() }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};
