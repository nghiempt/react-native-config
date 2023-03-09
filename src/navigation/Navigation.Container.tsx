import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenOptions} from './Config';
import {navigationRef} from './Navigate';
import colors from '../styles/colors';
import DrawerContent from './DrawerContent';

import HomeStackScreen from './HomeStack';
import LoginScreen from '../modules/Login/Login.Screen';
import LayerStackScreen from './LayerStack';
import StoreStackScreen from './StoreStack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function RootNavigation({checkLogin}: {checkLogin: any}) {
  return (
    <NavigationContainer ref={navigationRef}>
      {!checkLogin ? (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerContent {...props} />}
          drawerContentOptions={{
            activeTintColor: colors.main,
          }}>
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Store" component={StoreStackScreen} />
          <Drawer.Screen name="Layer" component={LayerStackScreen} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
