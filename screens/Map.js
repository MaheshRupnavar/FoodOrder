import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MapView from 'react-native-maps';
import PickerComp from '../Components/PickerComp';

const Map = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Images/Left_Arrow.png')} />
        </TouchableOpacity>
        <PickerComp city />
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.516726,
          longitude: 73.856255,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffff',
  },
  header: {
    flexDirection: 'row',
    top: 10,
    marginBottom: 30,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
