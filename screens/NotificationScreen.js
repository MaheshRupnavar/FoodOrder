import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function NotificationScreen({navigation}) {
  return (
    <SafeAreaView style={{padding: 5, flex: 1}}>
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
              fontSize: 25,
              fontWeight: '800',
              marginLeft: 10,
              marginTop: 10,
              color:'black'
            }}>
            Notifications
          </Text>
        </View>

        <View style={styles.innerCont}>
          <Text style={{fontSize: 18, fontWeight: 'bold',color:'black'}}>
            Lorem ipsum dolor sit omet
          </Text>
          <Text style={{color:'black'}}>
            The origin of the word Pizza is uncertain. The food was invented in
            Naples about 200 years ago. It is the name for a special type of
            flatbread, made with special dough
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 5,
              marginBottom: 5,
              color:'black'
            }}>
            26-11-2021 | 12:14 PM{' '}
          </Text>
        </View>
        <View
          style={{
            left: 20,
            right: 20,
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

       <View style={styles.innerCont}>
          <Text style={{fontSize: 18, fontWeight: 'bold',color:'black'}}>
            Lorem ipsum dolor sit omet
          </Text>
          <Text style={{color:'black'}}>
            The origin of the word Pizza is uncertain. The food was invented in
            Naples about 200 years ago. It is the name for a special type of
            flatbread, made with special dough
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 5,
              marginBottom: 5,
              color:'black'
            }}>
            26-11-2021 | 12:14 PM{' '}
          </Text>
        </View>
        <View 
          style={{
            left: 20,
            right: 20,
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

<View style={styles.innerCont}>
          <Text style={{fontSize: 18, fontWeight: 'bold',color:'black'}}>
            Lorem ipsum dolor sit omet
          </Text>
          <Text style={{color:'black'}}>
            The origin of the word Pizza is uncertain. The food was invented in
            Naples about 200 years ago. It is the name for a special type of
            flatbread, made with special dough
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 5,
              marginBottom: 5,
              color:'black'
            }}>
            26-11-2021 | 12:14 PM{' '}
          </Text>
        </View>
        <View 
          style={{
            left: 20,
            right: 20,
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
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
  innerCont: {
    marginLeft: 20,
    marginTop:20
  },
});
