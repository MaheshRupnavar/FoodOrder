import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ApiContainer from '../Components/ApiContainer';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.img}
              source={require('../assets/Images/Left_Arrow.png')}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 20}}>
            <TextInput
              placeholder="  Pizza"
              style={{
                height: 40,
                width: 200,
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 15,
              }}
            />
          </View>
        </View>
        <ApiContainer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  txtInput: {},
});

export default SearchScreen;
