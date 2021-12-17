import {createStore} from 'redux';
import cartItemsReducer from './cartItemsReducer';

const store = createStore(cartItemsReducer);

export default store;
