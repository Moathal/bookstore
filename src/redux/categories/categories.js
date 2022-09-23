const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export const addStatus = () => ({
  type: CHECK_STATUS,
});

export const categoriesReducer = (state = initialState, { type }) => {
  switch (type) {
    case CHECK_STATUS:
      return [...state, 'Being created'];
    default:
      return state;
  }
};
