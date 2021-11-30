import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BottomTab from '../Components/BottomTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';
import {NavigationContainer} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const categories = ['All', 'Pizza', 'Burger', 'Roll', 'Beverages','Chezzy'];

  const Card = () => {
    const burger = '../assets/Images/burger_picture.png';
    return (
      <View style={styles.card}>
        <View style={styles.shadow}>
          <Image source={require(burger)} style={{top: -20, left: 40}} />
        </View>
      </View>
    );
  };

  const CategoryList = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                {'    '}{item} {'    '}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{padding: 7, flex: 1}}>
      <View style={{backgroundColor: '#DCDCDC'}}>
        <View
          style={{
            height: 55,
            backgroundColor: '#fff',
          }}>
          <View style={styles.header}>
            <Icon
              style={{marginLeft: 10}}
              name="user-circle"
              size={34}
              color="black"
            />
            <Image
              style={{marginLeft: 40}}
              source={require('../assets/Images/location.png')}
            />
            <Text style={{color: '#000000', marginLeft: 20}}>CHAKAN PUNE</Text>
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/Images/down.png')}
            />
            <Image
              style={{marginLeft: 60, top: -5}}
              source={require('../assets/Images/options_icon.png')}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontFamily: 'GILROY-REGULAR',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Running Offers
          </Text>
          <View style={styles.Banners}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: '#FF4510',
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    top: 20,
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black',
                  }}>
                  {'       '}50% off{'\n'} {'    '}the full price of{'\n'}
                  {'    '}burgers
                </Text>

                <Card></Card>
              </View>
              <View style={{backgroundColor: '#CD853F', borderRadius: 15}}>
                <Text
                  style={{
                    top: 20,
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black',
                  }}>
                  {'       '}50% off{'\n'} {'    '}the full price of{'\n'}
                  {'    '}burgers
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Burger')}>
                  <Card />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Popular Now
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10, color: 'black'}}>
              {'                         '}
              {'                         '}
              {'        '}
              View all
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: '#ffff',
                  marginRight: 10,
                  borderRadius: 15,
                }}>
                <Card1 navigation={navigation} />
              </View>
              <View
                style={{
                  backgroundColor: '#ffff',
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Card1 navigation={navigation} />
              </View>
              <View
                style={{
                  backgroundColor: '#ffff',
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Card1 navigation={navigation} />
              </View>
              <View
                style={{
                  backgroundColor: '#ffff',
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Card1 navigation={navigation} />
              </View>
            </View>
          </ScrollView>

          <CategoryList />

          {/* last cards*/}
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
              <Card2 navigation={navigation} />
            </View>
            <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
              <Card2 navigation={navigation} />
            </View>
          </View>

          {/* last cards*/}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#ffff',
                marginRight: 10,
                borderRadius: 15,
                marginBottom: 70,
              }}>
              <Card2 navigation={navigation} />
            </View>
            <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
              <Card2 navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    top: 10,
  },
  card: {
    height: 40,
    marginLeft: 30,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    width: 230,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  Banners: {
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    marginLeft: 10,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTextSelected: {
    color: '#FF9800',
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    height: 250,
    borderRadius: 15,
    padding: 5,
    width: 175,
  },
});

export default HomeScreen;
