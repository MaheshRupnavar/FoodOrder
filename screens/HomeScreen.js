import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Animated,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import ApiContainer from '../Components/ApiContainer';

const HomeScreen = ({navigation}) => {
  const [state, setState] = useState({axiosData: null});

  const [categoryIndex, setCategoryIndex] = useState(0);
  const categories = ['All', 'Pizza', 'Burger', 'Roll', 'Beverages', 'Chezzy'];
  const scrollY = useRef(new Animated.Value(0)).current;
  const [feed, setFeed] = useState([]);

  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [increment, decrement] = useState(1);

  let [product, setproduct] = useState([]);

  const onPressHandler = () => {
    setSubmitted(!submitted);
  };

  const translateY = scrollY.interpolate({
    inputRange: [100, 400],
    outputRange: [100, 400],
    extrapolateLeft: 'clamp',
  });

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

  useEffect(() => {
    fetch('http://103.13.113.58:9090/admin/menu/web/by-category?categoryId=1')
      .then(re => re.json())
      .then(re => {
        setFeed(re.data);
        console.log(re.data);
      });
  }, []);

  let Image_Http_URL = {
    uri: 'http://cheersfiles.rentpayapp.in/cheers/menu/Test 0.jpeg',
  };
  useEffect(() => {
    axios
      .get('http://103.13.113.58:9090/admin/menu-category', {})
      .then(function (response) {
        setState({
          axiosData: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = data => {
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.list}>
          <Text style={styles.lightText}>{data.item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const CategoryList = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}>
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
                {'    '}
                {item} {'    '}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.safeV}>
      <Animated.View style={{backgroundColor: '#DCDCDC'}}>
        {/*Header */}
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
            <TouchableOpacity>
              <Image
                style={{marginLeft: 40}}
                source={require('../assets/Images/location.png')}
              />
            </TouchableOpacity>
            <Text style={{color: '#000000', marginLeft: 20}}>CHAKAN PUNE</Text>
            <TouchableOpacity>
              <Image
                style={{marginLeft: 20}}
                source={require('../assets/Images/down.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Image
                style={{marginLeft: 60, top: -5}}
                source={require('../assets/Images/options_icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner */}

        <ScrollView showsVerticalScrollIndicator={false} nestedscrollenabled>
          <Text style={styles.txtR}>Running Offers</Text>
          <View style={styles.Banners}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.bannerV}>
                <Text style={styles.txtBanner}>
                  {'       '}50% off{'\n'} {'    '}the full price of{'\n'}
                  {'    '}burgers
                </Text>

                <Card></Card>
              </View>
              <View style={{backgroundColor: '#CD853F', borderRadius: 15}}>
                <Text style={styles.txtB2}>
                  {'       '}50% off{'\n'} {'    '}the full price of{'\n'}
                  {'    '}burgers
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Burger')}>
                  <Card />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          {/* Card */}
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txtP}>Popular Now</Text>
            <Text style={{marginTop: 10, marginBottom: 10, color: 'black'}}>
              {'                         '}
              {'                         '}
              {'        '}
              View all
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={styles.cardV}>
                <Card1 navigation={navigation} />
              </View>
              <View style={styles.cardV}>
                <Card1 navigation={navigation} />
              </View>
              <View style={styles.cardV}>
                <Card1 navigation={navigation} />
              </View>
              <View style={styles.cardV}>
                <Card1 navigation={navigation} />
              </View>
            </View>
          </ScrollView>
          <ApiContainer />

          <FlatList
            data={feed}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 50,
            }}
            keyExtractor={(item, index) => {
              return item.id.toString();
            }}
            renderItem={({item, index}) => (
              <SafeAreaView>
                <View style={styles.card2}>
                  <View style={styles.cardCategory}>
                    <View style={{right: -100}}>
                      <TouchableOpacity onPress={() => setShow(!show)}>
                        {show === false ? (
                          <Image
                            style={{top: 10, left: 30}}
                            size={24}
                            source={require('../assets/Images/favouritesTab.png')}
                          />
                        ) : (
                          <Image
                            style={{top: 10, left: 30}}
                            size={70}
                            source={require('../assets/Images/favourites.png')}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Details')}
                      style={{borderRadius: 10}}>
                      <Image
                        source={Image_Http_URL}
                        style={{
                          top: 15,
                          left: 25,
                          width: 100,
                          height: 90,
                          borderRadius: 15,
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        top: 20,
                        fontWeight: 'bold',
                        fontSize: 18,
                        left: 30,
                        color: 'black',
                      }}>
                      {'   '}
                      {item.category.name}
                    </Text>
                    <Text style={{top: 15, color: 'black', left: 40}}>
                      {' '}
                      {item.description}
                    </Text>
                    <Text
                      style={{
                        top: 10,
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'black',
                        left: 40,
                      }}>
                      {'   '}
                      {item.price}
                    </Text>
                    <TouchableOpacity
                      onPress={onPressHandler}
                      style={{
                        backgroundColor: submitted ? '#ffff' : '#FFD700',
                        padding: 5,
                        top: 10,
                        borderRadius: 15,
                        left: 0,
                        alignItems: 'center',
                      }}>
                      {submitted ? (
                        <View
                          style={{
                            top: 7,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                          }}>
                          <TouchableOpacity
                            style={styles.btnTouchable}
                            onPress={() => decrement(increment - 1)}>
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
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 15,
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
            )}
          />

          {/* last cards  <CategoryList />   <ApiContainer/> 
          <Animated.View>
            <ScrollView>
              <View style={styles.cardV2}>
                <View style={styles.cardV}>
                  <Card2 navigation={navigation} />
                </View>
                <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
                  <Card2 navigation={navigation} />
                </View>
              </View>
            */}
          {/* last cards

              <Animated.View style={styles.cardV2}>
                <View style={styles.cardV}>
                  <Card2 navigation={navigation} />
                </View>
                <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
                  <Card2 navigation={navigation} />
                </View>
              </Animated.View>
                */}
          {/* last cards
              <View style={styles.cardV2}>
                <View style={{...styles.cardV, marginBottom: 40}}>
                  <Card2 navigation={navigation} />
                </View>
                <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
                  <Card2 navigation={navigation} />
                </View>
              </View>
            </ScrollView>
          </Animated.View>
          */}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeV: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    flex: 1,
    marginBottom: 60,
  },
  bannerV: {
    backgroundColor: '#FF4510',
    borderRadius: 15,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    top: 10,
  },
  cardV2: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  txtBanner: {
    top: 20,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  txtB2: {
    top: 20,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
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
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
    marginLeft: 10,
    alignItems: 'center',
    opacity: 2,
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
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
    padding: 7,
    width: 175,
  },
  txtR: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'GILROY-REGULAR',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  txtP: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  cardV: {
    backgroundColor: '#ffff',
    marginRight: 10,
    borderRadius: 15,
  },
  cardCategory: {
    backgroundColor: '#ffff',

    height: 230,
    width: 170,
    borderRadius: 15,
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

export default HomeScreen;
