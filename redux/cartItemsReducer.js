import {ADD_TO_FAV, REMOVE_TO_FAV} from './cartItems';

const initialState = [];

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      /* return {
          ...state,
          feed: state.feed.concat({
            key: Math.random(),
            name: action.data
          })} */
      return [...state, action.payload];
    case REMOVE_TO_FAV:
      /* return {
          ...state,
          feed: state.feed.filter((item) =>
            item.key !== action.key)
        }; */
      return state.filter(cartItem => cartItem.id !== action.payload.id);
  }
  return state;
};

export default cartItemsReducer;
