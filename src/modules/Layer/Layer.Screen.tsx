/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import colors from '../../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const LayerScreen: React.FC<{}> = () => {
  const navigation = useNavigation<any>();

  return (
    <View width="100%" height="100%">
      <View
        row
        padding-10
        centerH
        centerV
        backgroundColor={colors.main}
        style={{justifyContent: 'space-between'}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <MaterialCommunityIcons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <Text white text60>
            Bản đồ quy hoạch
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <MaterialCommunityIcons
              name="step-backward"
              size={28}
              color={colors.main}
            />
          </TouchableOpacity>
        </View>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1, width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 10.024549914402739,
          longitude: 105.75932349403189,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        region={{
          latitude: 10.024549914402739,
          longitude: 105.75932349403189,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        zoomEnabled={true}
        showsTraffic={true}
        showsScale={true}
        showsCompass={true}
        showsPointsOfInterest={true}
        onLongPress={() => {}}
        mapType={'hybrid'}
      />

      <TouchableOpacity
        style={{position: 'absolute', bottom: 30, right: 30}}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <View
          style={{backgroundColor: colors.white, padding: 6, borderRadius: 50}}>
          <MaterialCommunityIcons
            name="crosshairs-gps"
            size={38}
            color={colors.main}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LayerScreen;
