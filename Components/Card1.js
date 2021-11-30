import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Burger from '../screens/BurgerScreen'

const burger = '../assets/Images/burger_picture.png';
const Card1=({navigation})=> {
  const [show, setShow] = React.useState(false);


  return (
    <View style={styles.card1}>
      <View>
        <View style={{right: -120}}>
          <TouchableOpacity onPress={()=>setShow(!show)}>
          <Icon
          style={{top: 30}}
          name={show===false?'heart-alt':'heart'}
          size={24}
          />
          </TouchableOpacity>
        </View>
      
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Burger')}>

        <Image
          source={require(burger)}
          style={{
            justifyContent: 'center',
            top: -5,
            width: 150,
            height: 150,
          }}
        />
        </TouchableOpacity>
        </View>
        
        <Text
          style={{
            top: -30,
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
          }}>
          {'     '}HamBurger
        </Text>
        <Text style={{top: -30, color: 'black'}}>{'        '}Double Patty</Text>
        <Text
          style={{top: -30, fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          {'          '}$12.70
        </Text>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  card1: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    height: 200,
    borderRadius: 15,
    padding: 5,
    width: 175,
  },
});

export default Card1;