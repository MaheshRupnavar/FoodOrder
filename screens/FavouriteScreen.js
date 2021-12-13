import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Card1 from '../Components/Card1';
import FCard1 from '../Components/FCard1';
import FCard2 from '../Components/FCard2';
import ListItem from './ListItem';

export default function FavouriteScreen({navigation, favorites, route}) {
  const [feed, setFeed] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const renderEmptyConatainer = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text> The List is Empty</Text>
      </View>
    );
  };

  const onPressHandler = () => {
    setSubmitted(!submitted);
  };

  const renderRow = ({item}) => {
    return (
      <SafeAreaView>
        <View style={styles.card2}>
          <TouchableOpacity
            style={{marginLeft: 100, height: 20, width: 30}}
            onPress={item => {
              addToFavourites(item);
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
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image source={{uri: item.images[0]}} style={styles.cardImg} />
          </TouchableOpacity>
          <Text style={styles.cardTextName}>
            {'   '}
            {item.name}
          </Text>
          <Text style={{marginTop: 3, color: 'black', left: 40}}>
            {' '}
            {item.description}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                ...styles.cardTextPrice,
                textDecorationLine: 'line-through',
              }}>
              {' '}
              $ {item.price}
            </Text>
            <Text style={styles.cardTextPrice1}>$ 18</Text>
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
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {increment}
                </Text>
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

  return (
    <SafeAreaView style={{backgroundColor: '#DCDCDC', padding: 10}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.img}
              source={require('../assets/Images/Left_Arrow.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'GILROY-BLACK',
              marginLeft: 10,
              fontWeight: 'bold',
              marginTop: 10,
              color: 'black',
            }}>
            My favourites
          </Text>
        </View>

        {/* <FlatList
          data={route}
          numColumns={2}
          ListEmptyComponent={renderEmptyConatainer}
          renderItem={({item}) => (
            <ListItem
              key={item.id}
              name={item.name}
              description={item.description}
              images={item.images}
              price={item.price}
            />
          )}
        />*/}

        {/* <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <View
          style={{
            backgroundColor: '#ffff',
            marginRight: 10,
            borderRadius: 15,
          }}>
          <FCard1 />
        </View>
        <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
          <FCard2 />
        </View>
       
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <View
          style={{
            backgroundColor: '#ffff',
            marginRight: 10,
            borderRadius: 15,
          }}>
          <FCard2 />
        </View>
        <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
          <FCard1 />
        </View>
       
      </View>*/}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 20,
    marginTop: 10,
  },
  emptyContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});
