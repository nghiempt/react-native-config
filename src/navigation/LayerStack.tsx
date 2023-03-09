import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenOptions} from './Config';
import LayerScreen from '../modules/Layer/Layer.Screen2';

const LayerStack = createStackNavigator();
export default function LayerStackScreen() {
  return (
    <LayerStack.Navigator screenOptions={screenOptions}>
      <LayerStack.Screen name="Layer" component={LayerScreen} />
    </LayerStack.Navigator>
  );
}
