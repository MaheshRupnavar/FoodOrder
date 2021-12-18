import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Card1 from './Components/Card1';
import BottomTab from './Components/BottonTab/BottomTab';
import {
  MenuScreen,
  Map,
  BurgerScreen,
  CartScreen,
  DetailsScreen,
} from './screens/index';
import SearchScreen from './screens/SearchScreen';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return <BottomTab />;
};

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeStack"
          screenOptions={{
            headerShown: false,
            header: null,
          }}>
          <Stack.Screen name="Home" component={HomeStack} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Burger" component={BurgerScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Card1" component={Card1} />

          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
