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
          <TouchableOpacity style={{height: 20, width: 30}} onPress={()=>setShow(!show)}>
          {
            show===false
            ?
            <Image style={{top: 10,}} size={24} source={require('../assets/Images/favouritesTab.png')}/>
            :
             <Image style={{top: 10}} size={24} source={require('../assets/Images/favourites.png')}/>
          }
          </TouchableOpacity>
        </View>
      
      
        <TouchableOpacity onPress={()=>navigation.navigate('Burger')}>

        <Image
          source={require(burger)}
          style={{
            top: -10,
            left: -15,
            width: 150,
            height: 100,
          }}
        />
        </TouchableOpacity>
        
        <Text
          style={{
            top: -10,
            fontWeight: 'bold',
            fontSize: 18,
            left: 10,
            color: 'black',
          }}>
          HamBurger
        </Text>
        <Text style={{top: -7, left: 13,color: 'black'}}>Double Patty</Text>
        <Text
          style={{top: -1, left: 10,fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          {'   '}$12.70
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