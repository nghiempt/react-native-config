import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenOptions} from './Config';

import DetailStoreScreen from '../modules/Store/components/DetailStore.Screen';
import StoreScreen from '../modules/Store/Store.Screen';

const StoreStack = createStackNavigator();
export default function StoreStackScreen() {
  return (
    <StoreStack.Navigator screenOptions={screenOptions}>
      <StoreStack.Screen name="Store" component={StoreScreen} />
      <StoreStack.Screen name="DetailStore" component={DetailStoreScreen} />
    </StoreStack.Navigator>
  );
}
