import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTab from '../Components/BottonTab/BottomTab';

const MenuScreen = ({navigation}) => {
  return (
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
            color: 'black',
          }}>
          Menu
        </Text>
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 35,
              marginVertical: 25,
            }}>
            <Image
              source={require('../assets/Images/User.png')}
              size={20}
              style={{top: 7}}
            />
            <Text style={{fontSize: 18, color: 'black', marginHorizontal: 35}}>
              Profile Details
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{marginLeft: 60}}
              size={25}
            />
          </View>
          <View style={styles.line} />

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginVertical: 20,
            }}>
            <Image
              source={require('../assets/Images/Order_History.png')}
              size={20}
              style={{top: 7}}
            />
            <Text style={{fontSize: 18, color: 'black', marginHorizontal: 35}}>
              Order History
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{marginLeft: 65}}
              size={25}
            />
          </View>
          <View style={styles.line} />

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 35,
              marginVertical: 20,
            }}>
            <Image
              source={require('../assets/Images/Explore.png')}
              size={20}
              style={{top: 7}}
            />
            <Text style={{fontSize: 18, color: 'black', marginHorizontal: 35}}>
              Explore our merch
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{marginLeft: 30}}
              size={25}
            />
          </View>
          <View style={styles.line} />

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 35,
              marginVertical: 20,
            }}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={20}
            />
            <Text style={{fontSize: 18, color: 'black', marginHorizontal: 35}}>
              Payment Details
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{marginLeft: 40}}
              size={25}
            />
          </View>
          <View style={styles.line} />

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 35,
              marginVertical: 20,
            }}>
            <Image
              source={require('../assets/Images/multiUser.png')}
              size={20}
              style={{top: 7}}
            />
            <Text style={{fontSize: 18, color: 'black', marginHorizontal: 35}}>
              Meet the Team
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{marginLeft: 50}}
              size={25}
            />
          </View>
          <View style={styles.line} />

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 35,
              marginVertical: 20,
            }}>
            <Image
              source={require('../assets/Images/locationMenu.png')}
              size={20}
              style={{top: 7}}
            />
            <Text style={{fontSize: 18, color: 'black', marginHorizontal: 35}}>
              Address Book
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{marginLeft: 55}}
              size={25}
            />
          </View>
          <View style={styles.line} />

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 35,
              marginVertical: 20,
            }}>
            <Image
              source={require('../assets/Images/Group.png')}
              size={20}
              style={{top: 7}}
            />
            <Text style={{fontSize: 18, color: 'black', marginHorizontal: 35}}>
              Settings
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{marginLeft: 105}}
              size={25}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
  line: {
    marginHorizontal: 20,
    marginTop: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});

export default MenuScreen;
