//import liraries
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {List} from './List';
import {ADD_TO_FAV, REMOVE_TO_FAV} from '../redux/cartItems';
import {useSelector, useDispatch} from 'react-redux';

const ListItem = ({name, description, price, images, discountPrice}) => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [increment, decrement] = useState(1);
  const [show, setShow] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const cartItems = useSelector(state => state);
  const dispatch = useDispatch();
  const addItemToCart = item => dispatch({type: ADD_TO_FAV, payload: item});
  const removeItemFromCart = item =>
    dispatch({type: REMOVE_TO_FAV, payload: item});

  const setDecrement = () => {
    increment < 2 ? onPressHandler() : decrement(increment - 1);
    //increment === 0 ? onPressHandler() : null;
  };
  const onPressHandler = () => {
    setSubmitted(!submitted);
  };
  const addToFavourites = id => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    console.log(id);
  };

  let findfavorite = favorite.filter(item => favorite.includes(item.id));

  const removeFavorite = id => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };

  let Image_Http_URL = {
    uri: 'http://cheersfiles.rentpayapp.in/cheers/menu/Test 0.jpeg',
  };

  return (
    <SafeAreaView>
      <View style={styles.card2}>
        <TouchableOpacity
          style={{marginLeft: 100, height: 20, width: 30}}
          onPress={item => {
            addItemToCart(item);
            setIsFavourite(!isFavourite);
          }}>
          {isFavourite === false ? (
            <Image
              style={{marginTop: 5, marginLeft: 30}}
              size={24}
              source={require('../assets/Images/favouritesTab.png')}
            />
          ) : (
            <Image
              style={{marginTop: 5, marginLeft: 30}}
              size={70}
              source={require('../assets/Images/favourites.png')}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              name: name,
              description: description,
              price: price,
              images: images,
              discountPrice: discountPrice,
            })
          }>
          <Image source={{uri: images[0]}} style={styles.cardImg} />
        </TouchableOpacity>
        <Text style={styles.cardTextName}>
          {'   '}
          {name}
        </Text>
        <Text style={{marginTop: 3, color: 'black', left: 40}}>
          {' '}
          {description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              ...styles.cardTextPrice,
              textDecorationLine: 'line-through',
            }}>
            {' '}
            $ {price}
          </Text>
          <Text style={styles.cardTextPrice1}>$ {discountPrice}</Text>
        </View>

        <TouchableOpacity
          onPress={onPressHandler}
          style={{
            backgroundColor: submitted ? '#ffff' : '#FFD700',
            ...styles.touchableAdd,
          }}>
          {submitted ? (
            <View style={styles.increViewContainer}>
              <TouchableOpacity
                style={styles.btnTouchable}
                onPress={() => setDecrement()}>
                <Text style={styles.txt1}>-</Text>
              </TouchableOpacity>
              <Text style={styles.txtIncrement}>{increment}</Text>
              <TouchableOpacity
                style={styles.btnTouchable1}
                onPress={() => decrement(increment + 1)}>
                <Text style={styles.txt1}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <Text style={styles.textAddCart}>Add to Cart</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card2: {
    padding: 7,
    width: 175,
    height: 250,
    marginBottom: 20,
    marginRight: 10,

    justifyContent: 'space-evenly',

    backgroundColor: '#ffff',
    borderRadius: 15,
  },

  cardV2: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardCategory: {
    height: 240,
    width: 170,
  },
  cardImg: {
    marginTop: 10,
    marginLeft: 25,
    width: 100,
    height: 90,
    borderRadius: 15,
  },
  cardTextName: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 30,
    color: 'black',
  },
  cardTextPrice: {
    marginTop: 1,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 40,
  },
  cardTextPrice1: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
  },
  touchableAdd: {
    padding: 5,
    height: 30,
    width: 130,
    marginTop: 2,
    marginLeft: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  increViewContainer: {
    marginTop: 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textAddCart: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnTouchable: {
    alignItems: 'center',
    height: 25,
    width: 25,
    backgroundColor: '#A9A9A9',
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 15,
  },
  btnTouchable1: {
    alignItems: 'center',
    height: 25,
    width: 25,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 15,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  txtIncrement: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ListItem;
