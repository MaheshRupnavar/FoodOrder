import axios from 'axios';

const fetchRecords = () => {
  let one = 'http://103.13.113.58:9090/admin/menu/web/by-category?categoryId=1';
  let two = 'http://103.13.113.58:9090/admin/menu/web/by-category?categoryId=2';

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

  axios.all([requestOne, requestTwo]).then(
    axios.spread((...responses) => {
      if (responses[0] === 200) {
        return responses.data;
      }
      if (responses[1] === 200) {
        return responses.data;
      }
    }),
  );
};

export default fetchRecords;

/*export const CatgoryService = {
  getMenusByCatgoryId: () => {
    const url =
      'http://103.13.113.58:9090/admin/menu/web/by-category?categoryId=1';
    fetch(url)
      .then(re => re.json())
      .then(re => {
        return re.data;
      });
  },
};

export const getMenusByCatgoryId = categoryId => {
  return fetch({
    method: 'GET',
    url:
      `http://103.13.113.58:9090/admin/menu/web/by-category?categoryId=` +
      categoryId,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};*/
