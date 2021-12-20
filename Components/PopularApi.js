import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getMenusByPopular} from '../redux/actions';
import ListItemPopular from '../screens/ListItemPopular';

const PopularApi = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    getMenusByPopular();
  }, []);

  const getMenusByPopular = async () => {
    const P_API = 'http://103.13.113.58:9090/admin/menu/web';
    let resp = await axios.get(P_API);
    setFood(resp.data.data);
  };

  return (
    <>
      <View>
        <FlatList
          data={food}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ListItemPopular
              key={item.id}
              name={item.name}
              description={item.description}
              images={item.images}
              price={item.price}
              discountPrice={item.discountPrice}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default PopularApi;
