import React from 'react';
import {Toast} from 'react-native-ui-lib';
import colors from '../../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default (props: any) => (
  <Toast
    visible={props.showToast}
    position="top"
    backgroundColor={props.isError ? colors.secondMain : colors.green}
    message={props.message}
    autoDismiss={4000}
    onDismiss={props.hideToast}
    icon={
      props.isError ? (
        <MaterialCommunityIcons name="sticker-alert-outline" size={20} />
      ) : (
        <MaterialCommunityIcons name="sticker-check" size={20} />
      )
    }
    showDismiss
  />
);
