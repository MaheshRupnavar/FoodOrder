import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CartScreen() {
  const MyCart = () => {
    return (
      <View style={styles.Mycart}>
        <Image
          source={require('../assets/Images/Delicious-pizza.png')}
          style={styles.image}
        />
        <View style={{marginLeft: 40, flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Size-M</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Margherita</Text>
          <Text style={{fontSize: 15}}>Cheesy Piazza</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>$12.50</Text>
        </View>
        <Icon name="close" size={30} style={{marginLeft: 50}} />
      </View>
    );
  };
  return (
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
            fontSize: 25,
            fontWeight: '800',
            marginLeft: 10,
            marginTop: 10,
          }}>
          My Cart
        </Text>
      </View>
      <View>
        <Text style={{color: '#FFD700', fontSize: 20, left: 20}}>
          5 items {'                                       '} Total
        </Text>
        <Text
          style={{left: 20, fontSize: 22, fontWeight: 'bold', marginTop: 3}}>
          Your Order{'                          '} $37.50
        </Text>
      </View>
      <ScrollView>
      <View>
        <MyCart />
      </View>
      <View
        style={{
            left:20,
            right:20,
            marginTop:10,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <View>
        <MyCart />
      </View>
      <View
        style={{
            left:20,
            right:20,
            marginTop:10,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <View>
        <MyCart />
      </View>
      <View
        style={{
            left:20,
            right:20,
            marginTop:10,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      
      </ScrollView>
      <View> 
      
      <View style={{bottom:30,alignItems:'center'}}>
      <TouchableOpacity style={{backgroundColor:'#FFD700',width:300,height:50,alignItems:'center',justifyContent:'center',borderRadius:25}}>
     <Text style={{color:'black',fontSize:30,fontWeight:'bold',}}>Place Order</Text>
     </TouchableOpacity>
     </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    justifyContent:'center'
  },
  header: {
    flexDirection: 'row',
    marginBottom: 30,
    left: 20,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 20,
    marginTop: 10,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 15,
  },
  Mycart: {
    marginTop: 20,
    left: 25,
    flexDirection: 'row',
    backgroundColor: '',
  },
});
