import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {View} from 'react-native-ui-lib';
import colors from '../styles/colors';

export default function ViewContainer({children}: {children: any}) {
  return (
    <View flex backgroundColor={colors.white}>
      <SafeAreaView backgroundColor={colors.main} />
      <StatusBar backgroundColor={colors.main} barStyle={'light-content'} />
      {children}
    </View>
  );
}
