import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenOptions} from './Config';
import HomeScreen from '../modules/Home/Home.Screen';

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
