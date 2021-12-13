import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import NotificationScreen from './screens/NotificationScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailsScreen from './screens/DetailsScreen';

import BurgerScreen from './screens/BurgerScreen';

import Card1 from './Components/Card1';
import MenuScreen from './screens/MenuScreen';
import Map from './screens/Map';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        header: null,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Burger" component={BurgerScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Card1" component={Card1} />
      
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
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
          name="Homestack"
          component={HomeStack}
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/Images/Home.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="My Favourites"
          component={FavouriteScreen}
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/Images/favouritesTab.png')} />
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
                    source={require('./assets/Images/Search.png')}
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
              <Image source={require('./assets/Images/Notification.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: () => {
              return <Image source={require('./assets/Images/Cart.png')} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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

export default App;
