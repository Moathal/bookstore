/* import { createSlice } from "@reduxjs/toolkit";
import { postBooks } from "./books";

const URL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QbiwMijYAaROk7cu8aO/books";

export const bookSlice = createSlice({
  name: "bookApi",
  initialState: [],
  reducers: {
    addBook: (state, { payload }) => {
      state = [...state, { ...payload, id: uuidv4() }];
    },

    deleteState: (state, { payload }) => {
      state = state.filter((book) => book.id !== payload);
    },

    retrieveBooks: (state, { payload }) => {
      state = payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(postBooks.fulfilled, (state, {payload}) => {
      // Add user to the state array
      state.push(payload);
    });
  },
});

export const { deleteState, addState, getBook, setStatus } = bookSlice.actions;

export default bookSlice.reducer; */
