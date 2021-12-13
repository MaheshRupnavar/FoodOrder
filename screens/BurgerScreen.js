import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function PizzaScreen({navigation}) {
  const [submitted, setSubmitted] = useState(false);
  const [increment, decrement] = useState(1);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categories = ['S', 'M', 'L'];

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

  const setDecrement = () => {
    increment < 2 ? onPressHandler() : decrement(increment - 1);
  };

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
            <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>
              Margherita Pizza
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              $12.50
            </Text>
          </View>
          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require('../assets/Images/burger_picture.png')}
            />
          </View>
          <Text style={styles.txtSize}> Size</Text>
          <View style={{flexDirection: 'row', left: 15, margin: 5}}>
            <View style={styles.catView}>
              <CategoryList />
            </View>
          </View>

          <View style={styles.detailView}>
            <Text style={styles.txt}>Details</Text>
            <Text style={styles.txtDetail}>
              {' '}
              The origin of the word Pizza is uncertain. The food was invented
              in Naples about 200 years ago. It is the name for a special type
              of flatbread, made with special doughhe origin of the word Pizza
              is uncertain. The food was invented in Naples about 200 years ago.
              It is the name for a special type of flatbread, made with special
              dough
            </Text>
          </View>
        </ScrollView>
        <View style={{bottom: -30, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={onPressHandler}
            style={styles.cartTouchable}
            disabled={submitted}>
            {submitted ? (
              <View style={styles.viewIncre}>
                <TouchableOpacity
                  style={styles.btnTouchable}
                  onPress={() => setDecrement()}>
                  <Text style={styles.txt1}>-</Text>
                </TouchableOpacity>
                <Text style={styles.txtIn}>{increment}</Text>
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
    width: 250,
    height: 200,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  txtSize: {
    left: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  catView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txtDetail: {
    marginTop: 5,
    right: 10,
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
    marginBottom: 10,
  },
  detailView: {
    left: 20,
    marginTop: 5,
    flexDirection: 'column',
    justifyContent: 'center',
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
  txtIn: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  cartTouchable: {
    backgroundColor: '#FFD700',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
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
  viewIncre: {
    bottom: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
});
