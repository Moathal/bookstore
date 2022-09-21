const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

export const addStatus = () => ({
  type: CHECK_STATUS,
});

export const categoriesReducer = (state = initialState, { type }) => {
  switch (type) {
    case CHECK_STATUS:
      return 'Being created';
    default:
      return state;
  }
};
