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
import ListItem from '../screens/ListItem';
import {useSelector, useDispatch} from 'react-redux';
import {getMenusByCatgoryId} from '../redux/actions';

const PopularApi = () => {
  const {food} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenusByCatgoryId(1));
  }, []);

  return (
    <>
      <View>
        <FlatList
          data={food}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ListItem
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
