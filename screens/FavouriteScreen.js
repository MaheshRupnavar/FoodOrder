import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';

export default function FavouriteScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: '#DCDCDC',padding:10}}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
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
          <Card3 />
        </View>
        <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
          <Card2 />
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
          <Card2 />
        </View>
        <View style={{backgroundColor: '#ffff', borderRadius: 15}}>
          <Card3 />
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
