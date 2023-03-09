import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HeaderComponent({
  title,
  subtitle,
  isDrawerOpen,
}: {
  title: any;
  subtitle: any;
  isDrawerOpen: any;
}) {
  const navigation = useNavigation();
  return (
    <View row padding-10 spread centerV backgroundColor={colors.main}>
      {isDrawerOpen ? (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <MaterialCommunityIcons name="menu" size={20} color="#fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      )}

      <Text s18b white>
        {title}
      </Text>
      {subtitle ? subtitle : <View marginL-20 />}
    </View>
  );
}
