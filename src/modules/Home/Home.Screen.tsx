/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import colors from '../../styles/colors';
import ViewContainer from '../../components/ViewContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  actionLoadingStart,
  actionLoadingStop,
} from '../../components/Loading/Loading.State';
import ModalListPost from './Modal/ModalListPost';

const HomeScreen: React.FC<{}> = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [activeId, setActiveId] = React.useState(0);
  const [activeModalListPost, setActiveModalListPost] = React.useState(true);
 
  const handleFilterCategory = async (id: any) => {
    dispatch(actionLoadingStart());
    setActiveId(id);
      setActiveModalListPost(true);
      dispatch(actionLoadingStop());
  };

  return (
    <ViewContainer>
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
            <MaterialCommunityIcons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <Text white style={{fontSize: 22, fontWeight: 'bold'}}>
            Trang chủ
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="menu" size={28} color={colors.main} />
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

      <View
        row
        padding-10
        centerH
        centerV
        style={{
          position: 'absolute',
          top: 56,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {[
            'Nông nghiệp',
            'Xây dựng',
            'Lâm nghiệp',
            'Giao thông vận tải',
            'Môi trường',
          ].map((area, index) => {
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
      <ModalListPost props={{
        activeModalListPost: activeModalListPost,
        setActiveModalListPost: setActiveModalListPost,
      }} />
    </ViewContainer>
  );
};

export default HomeScreen;
