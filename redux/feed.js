import {ADD_TO_FAV, REMOVE_TO_FAV} from './cartItems';

export const addFav = feed => ({
  type: ADD_TO_FAV,
  data: feed,
});

export const removeFav = key => ({
  type: REMOVE_TO_FAV,
  key: key,
});
