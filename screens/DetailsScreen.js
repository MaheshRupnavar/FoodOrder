import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function DetailsScreen({navigation}) {
  const [submitted, setSubmitted] = useState(false);
  const [increment, decrement] = useState(1);
  const [categoryIndex, setCategoryIndex] = useState(0);  
  const categories = ['S','M','L'];

  const setDecrement=()=>{
    increment-1<0?null:decrement(increment-1);
    increment-1===0?onPressHandler():null;
  }
  
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
                {'   '}{item}{' '}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      
    );
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <Image
              style={styles.img}
              source={require('../assets/Images/PizzaD.png')}
            />
          </View>
          <Text
            style={{
              left: 20,
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {' '}
            Size
          </Text>
          <View style={{flexDirection: 'row', left: 20, margin: 10}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <CategoryList/>
            </View>
          </View>

          <View
            style={{
              left: 20,
              marginTop: 10,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text style={styles.txt}>Details</Text>
            <Text
              style={{marginTop: 5, right: 10, fontSize: 15, color: 'black'}}>
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
        <View style={{bottom: -10, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={onPressHandler}
            style={{
              backgroundColor: submitted ? '#DCDCDC' : '#FFD700',
              width: 300,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            }}
            disabled={submitted}>
            {submitted ? (
              <View
                style={{
                  bottom: -10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
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
                <Text
                  style={{
                    color: 'black',
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Add to Cart
                </Text>
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
    width: 200,
    height: 200,
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
    borderRadius:10,
    marginLeft:5,
    height: 25,
    width: 35,
  },
  categoryTextSelected: {
   backgroundColor:'#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
