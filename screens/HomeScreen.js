import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './HomeStyles';
import ApiContainer from '../Components/ApiContainer';
import PopularApi from '../Components/PopularApi';

const HomeScreen = ({data, navigation}) => {
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

          <PopularApi />

          <ApiContainer />
          
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeScreen;
