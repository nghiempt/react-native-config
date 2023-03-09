/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import colors from '../../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {loadStore, loadType, getUserLocation} from './Store.Api';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {KEY} from '../../constant/apiUrl';
import {ScrollView} from 'react-native';
import {
  actionLoadingStart,
  actionLoadingStop,
} from '../../components/Loading/Loading.State';

const StoreScreen: React.FC<{}> = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const listStore: any = useSelector((state: any) => state.store.listStore);
  const listType: any = useSelector((state: any) => state.store.listTyle);

  const [activeId, setActiveId] = React.useState(0);

  const handleFilterCategory = async (id: any) => {
    dispatch(actionLoadingStart());
    setTimeout(() => {
      setActiveId(id);
      dispatch(actionLoadingStop());
    }, 500);
  };

  const initStore = () => {
    const param = {
      key: KEY,
    };
    const body = {
      Name: null,
      provinceId: null,
      districtId: null,
      addressI_Id: null,
      addressII_Id: null,
      typeStoreId: null,
      Coordinates: null,
    };
    dispatch(getUserLocation());
    dispatch(loadStore(param, body));
  };

  const filterStore = (typeId: any) => {
    const param = {
      key: KEY,
    };
    const body = {
      Name: null,
      provinceId: null,
      districtId: null,
      addressI_Id: null,
      addressII_Id: null,
      typeStoreId: typeId,
      Coordinates: null,
    };
    dispatch(getUserLocation());
    dispatch(loadStore(param, body));
  };

  const initType = () => {
    const param = {
      key: KEY,
    };
    dispatch(loadType(param));
  };

  function loadData() {
    // initStore();
    // initType();
  }

  useEffect(() => {
    loadData();
  });

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
            Danh sách cửa hàng
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
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        zoomEnabled={true}
        showsTraffic={true}
        showsScale={true}
        showsCompass={true}
        showsPointsOfInterest={true}
        onLongPress={() => {}}
        mapType={'hybrid'}>
        {['', ''].map((item: any) => {
          if (item?.Lat != null && item?.Lng != null) {
            return (
              <Marker
                key={item.id}
                onPress={() => {
                  console.log('Marker pressed');
                  navigation.navigate('DetailStore', item);
                }}
                coordinate={{
                  latitude: parseFloat(item.Lat),
                  longitude: parseFloat(item.Lng),
                }}>
                <Image
                  source={require('../../../assets/images/post.png')}
                  style={{height: 35, width: 35}}
                />
              </Marker>
            );
          }
        })}
      </MapView>

      <View
        row
        padding-10
        centerH
        centerV
        style={{
          justifyContent: 'space-between',
          position: 'absolute',
          top: 56,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {['Tuyến Quận/Huyện', 'Tuyến Tỉnh/Thành phố'].map((area, index) => {
            return (
              <Button
                key={index}
                label={area}
                size="small"
                labelStyle={{fontWeight: 'bold', fontSize: 18}}
                marginR-10
                borderRadius={6}
                backgroundColor={
                  activeId === index ? colors.indianRed : colors.gray
                }
                style={{paddingHorizontal: 20, paddingVertical: 10}}
                onPress={() => handleFilterCategory(index)}
              />
            );
          })}
        </ScrollView>
      </View>

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

export default StoreScreen;
