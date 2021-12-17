import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './redux/Store';
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

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return <BottomTab />;
};

const App = () => {
  return (
    <Provider store={store}>
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
