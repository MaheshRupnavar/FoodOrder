import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Card1 from '../Components/Card1';
import FCard1 from '../Components/FCard1';
import FCard2 from '../Components/FCard2';

export default function FavouriteScreen({navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: '#DCDCDC',padding:10}}>
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
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 10,
            color:'black'
          }}>
          My favourites
        </Text>
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
       
      </View>
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
});
