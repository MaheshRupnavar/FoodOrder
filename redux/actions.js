import axios from 'axios';
export const CATEGORY_CARDS = 'CATEGORY_CARDS';

const API_URL =
  'http://103.13.113.58:9090/admin/menu/web/by-category?categoryId=';

export const getMenusByCatgoryId = CategoryId => {
  try {
    return async dispatch => {
      const result = await axios.get(API_URL + CategoryId);
      const json = result.data.data;
      if (json) {
        dispatch({
          type: CATEGORY_CARDS,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
