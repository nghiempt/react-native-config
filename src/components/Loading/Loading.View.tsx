import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {UIActivityIndicator} from 'react-native-indicators';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default ({loading}: {loading: any}) => {
  if (loading) {
    return (
      <View style={css.container}>
        <View style={[css.child_view]}>
          <UIActivityIndicator color={colors.main} />
          <Text s13b>Vui lòng chờ ...</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const css = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  child_view: {
    height: 120,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
