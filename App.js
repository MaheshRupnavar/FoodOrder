import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import NotificationScreen from './screens/NotificationScreen';
import SearchScreen from './screens/SearchScreen';
import BottomTab from './Components/BottomTab';

const Stack = createNativeStackNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false,}}
        
        barStyle={{
          showLabel: false,
          position: 'absolute',
          marginTop: 10,
          bottom: 10,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 20,
          height: 70,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
}
/*
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          header: null
        }}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Search" component={SearchScreen} />
         </Stack.Navigator>
    </NavigationContainer>
  );*/
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
    top: -5,
  },
  SearchContainer: {
    justifyContent: 'center',
  },
});

export default App;
