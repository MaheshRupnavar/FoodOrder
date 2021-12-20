import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';
import {COLORS} from '../Components/Constants/COLORS';

export default function DetailsScreen({navigation, route}) {
  const {name, price, images, description, discountPrice} = route.params;
  const [submitted, setSubmitted] = useState(false);
  const [increment, decrement] = useState(1);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categories = ['S', 'M', 'L'];
  const [feed, setFeed] = useState('');

  const setDecrement = () => {
    increment < 2 ? onPressHandler() : decrement(increment - 1);
  };

  let Image_Http_URL = {
    uri: 'http://cheersfiles.rentpayapp.in/cheers/menu/Test 0.jpeg',
  };

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.categoryTextSelected,
              ]}>
              {'   '}
              {item}{' '}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  useEffect(() => {
    fetch('http://103.13.113.58:9090/admin/menu/web/by-category?categoryId=1')
      .then(re => re.json())
      .then(re => {
        const array = re.data;
        for (const i of array) {
          const name = i.name;
          setFeed(name);
          console.log(name);
        }
      });
  }, []);

  const onPressHandler = () => {
    setSubmitted(!submitted);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#DCDCDC', padding: 10}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack('Home')}>
            <Image source={require('../assets/Images/Left_Arrow.png')} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'column', left: 20}}>
            <>
              <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>
                {name}
              </Text>
              <View style={{flexDirection: 'row', marginBottom: 10}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                    textDecorationLine: 'line-through',
                  }}>
                  ${price}
                </Text>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                  {'  '}$ {discountPrice}
                </Text>
              </View>
            </>
          </View>
          <View style={styles.imgView}>
            <Image style={styles.img} source={{uri: images[0]}} />
          </View>
          <Text style={styles.txtSize}> Size</Text>
          <View style={{flexDirection: 'row', left: 20, margin: 10}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <CategoryList />
            </View>
          </View>

          <View style={styles.detailsView}>
            <Text style={styles.txt}>Details</Text>
            <Text style={styles.txtDetails}> {description}</Text>
          </View>
        </ScrollView>
        <View style={{bottom: -10, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={onPressHandler}
            style={{
              backgroundColor: submitted ? COLORS.grey : COLORS.gold,
              width: 300,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            }}
            disabled={submitted}>
            {submitted ? (
              <View style={styles.increView}>
                <TouchableOpacity
                  style={styles.btnTouchable}
                  onPress={() => setDecrement()}>
                  <Text style={styles.txt1}>-</Text>
                </TouchableOpacity>
                <Text
                  style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
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
                <Text style={styles.txtCart}>Add to Cart</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  img: {
    width: 180,
    height: 180,
    borderRadius: 15,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  Touchable: {
    alignItems: 'center',
    height: 30,
    width: 40,
    backgroundColor: '#A9A9A9',
    borderRadius: 10,
    justifyContent: 'center',
  },
  Touchable1: {
    alignItems: 'center',
    height: 30,
    width: 40,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  btnTouchable: {
    alignItems: 'center',
    height: 40,
    width: 40,
    backgroundColor: '#A9A9A9',
    borderRadius: 10,
    justifyContent: 'center',
    marginRight: 15,
  },
  btnTouchable1: {
    alignItems: 'center',
    height: 40,
    width: 40,
    backgroundColor: '#FFD700',
    borderRadius: 10,
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
    fontSize: 25,
    color: 'black',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
    backgroundColor: '#A9A9A9',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 5,
    height: 25,
    width: 35,
  },
  categoryTextSelected: {
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCart: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  increView: {
    bottom: -10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtDetails: {
    marginTop: 5,
    right: 10,
    fontSize: 15,
    color: 'black',
  },
  detailsView: {
    left: 20,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  txtSize: {
    left: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
});
