import * as a from './actionTypes';
const initialState = [];

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    case a.DELETE_BOOK: {
      const books = state;
      const newState = books.filter((book) => book.id !== action.payload);
      return newState;
    }
    default:
      return state;
  }
};
