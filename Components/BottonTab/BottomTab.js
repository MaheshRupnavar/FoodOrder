import * as React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  CartScreen,
  FavouriteScreen,
  NotificationScreen,
  SearchScreen,
} from '../../screens/index';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          elevation: 5,
          borderRadius: 50,
          marginHorizontal: 15,
          height: 50,
        },
      }}
      barStyle={{
        showLabel: false,
        position: 'absolute',
        marginTop: 10,
        bottom: 10,
        left: 15,
        right: 15,

        backgroundColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/Images/Home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="My Favourites"
        component={FavouriteScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/Images/favouritesTab.png')} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarIcon: () => (
            <View style={styles.SearchContainer}>
              <TouchableOpacity style={styles.CirclShape}>
                <Image
                  source={require('../../assets/Images/Search.png')}
                  resizeMode="cover"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: '#fff',
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/Images/Notification.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => {
            return <Image source={require('../../assets/Images/Cart.png')} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  CirclShape: {
    flexDirection: 'column',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
  },
  SearchContainer: {
    justifyContent: 'center',
  },
});

export default BottomTab;
