import {CATEGORY_CARDS, POPULAR_CARDS} from './actions';

const initialState = {
  food: [],
  PFood:[]
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_CARDS:
      return {...state, food: action.payload};
    case POPULAR_CARDS:
      return {...state, PFood: action.payload};
    default:
      return state;
  }
}

export default userReducer;
