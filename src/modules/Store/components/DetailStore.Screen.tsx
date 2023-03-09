/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Carousel,
} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewContainer from '../../../components/ViewContainer';
import colors from '../../../styles/colors';
import {useNavigation} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {getStoreById} from '../Map.Api';

const DetailStoreScreen: React.FC<{}> = () => {
  const navigation = useNavigation<any>();
  // const dispatch = useDispatch();
  const currentTime = new Date().toLocaleTimeString();

  const loadData = () => {
    // dispatch(getStoreById()).then((res) => {
    //   console.log(res);
    // });
  };

  useEffect(() => {
    loadData();
  }, []);

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
              navigation.goBack();
            }}>
            <MaterialCommunityIcons
              name="step-backward"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text white style={{fontSize: 18, fontWeight: 'bold'}}>
            Thông tin cửa hàng
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="menu" size={28} color={colors.main} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View row paddingH-10 paddingV-10 centerV>
          <Image
            source={{
              uri: 'http://demo.vn:4300/upload/info-company/1677170267783-logo_KHDT.png',
            }}
            style={{width: 60, height: 60}}
          />
          <View marginL-20 centerV flex>
            <Text
              s18b
              numberOfLines={2}
              style={{flexWrap: 'wrap', fontSize: 18, fontWeight: 'bold'}}>
              {store?.Name}
            </Text>

            {isNaN(route.params.store?.distance) ? (
              <View />
            ) : (
              <View row marginT-5 centerV>
                <MaterialCommunityIcons
                  name="walk"
                  size={20}
                  color={colors.main}
                />
                <Text>địa điểm của bạn</Text>
                <Button
                  size="small"
                  label={`${Number(
                    route.params.store?.distance.toFixed(2),
                  )} km`}
                  marginL-10
                  borderRadius={8}
                />
              </View>
            )}
          </View>
        </View>

        <View
          flex
          marginB-20
          centerH
          centerV
          backgroundColor={colors.black}
          width="100%"
          height={400}>
          {images.length === 0 ? (
            <Image
              source={{uri: store?.url_image}}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          ) : (
            <Carousel
              onChangePage={() => console.log('page changed')}
              autoplay={true}
              showCounter={true}
              autoplayInterval={3000}
              loop={true}
              containerMarginHorizontal={0}
              containerPaddingVertical={0}
              allowAccessibleLayout={true}
              animated={true}
              contentContainerCustomStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {images.map((items) => (
                <Image
                  source={{uri: items?.url_name}}
                  style={{width: '100%', height: 400}}
                  resizeMode="contain"
                />
              ))}
            </Carousel>
          )}
        </View>

        <View row centerH>
          <View centerH>
            <MaterialCommunityIcons
              name="arrow-left-bottom"
              size={40}
              color={colors.main}
            />
            <Text>Đường đi</Text>
          </View>
          <View centerH marginH-100>
            <MaterialCommunityIcons
              name="crosshairs-gps"
              size={40}
              color={colors.main}
            />
            <Text>Vị trí</Text>
          </View>
          <View centerH>
            <MaterialCommunityIcons
              name="content-save-outline"
              size={40}
              color={colors.main}
            />
            <Text>Lưu</Text>
          </View>
        </View>

        <View flex-5 marginV-30>
          {store.Address !== null ? (
            <View row marginB-10>
              <View paddingH-20>
                <MaterialCommunityIcons
                  name="map-marker-radius-outline"
                  size={20}
                  color={colors.main}
                />
              </View>
              <Text>{store?.Address}</Text>
            </View>
          ) : (
            <View></View>
          )}

          <View row marginB-10 centerV>
            <View paddingH-20>
              <MaterialCommunityIcons
                name="clock-time-three-outline"
                size={20}
                color={colors.main}
              />
            </View>
            <Text style={{flexWrap: 'wrap'}}>{store?.HourOpen}</Text>
            <Text style={{flexWrap: 'wrap'}}> --- {store?.HourClose}</Text>
            {Date(store?.HourClose) < currentTime ? (
              <Button
                size="small"
                label="Đang mở cửa"
                marginL-10
                borderRadius={0}
                backgroundColor={colors.green}
              />
            ) : (
              <Button
                size="small"
                label="Đã đóng cửa"
                marginL-10
                borderRadius={0}
                backgroundColor={colors.goldenrod2}
              />
            )}
          </View>

          {store.Phone !== null ? (
            <View row marginB-10>
              <View paddingH-20>
                <MaterialCommunityIcons
                  name="phone"
                  size={20}
                  color={colors.main}
                />
              </View>
              <Text>{store?.Phone}</Text>
            </View>
          ) : (
            <View></View>
          )}

          {store?.Website !== '' ? (
            <View row marginB-10>
              <View paddingH-20>
                <MaterialCommunityIcons
                  name="web"
                  size={20}
                  color={colors.main}
                />
              </View>
              <Text>{store?.Website}</Text>
            </View>
          ) : (
            <View></View>
          )}

          {store.Lng !== null ? (
            <View row marginB-10>
              <View paddingH-20>
                <MaterialCommunityIcons
                  name="crosshairs-gps"
                  size={20}
                  color={colors.main}
                />
              </View>
              <Text>
                {store?.Lng}, {store?.Lat}
              </Text>
            </View>
          ) : (
            <View></View>
          )}

          {store.Note !== null ? (
            <View row marginB-10>
              <View paddingH-20>
                <MaterialCommunityIcons
                  name="file-document-outline"
                  size={20}
                  color={colors.main}
                />
              </View>
              <Text>{store?.Note}</Text>
            </View>
          ) : (
            <View></View>
          )}

          {store.DetailStore?.map((item, index) => (
            <View row paddingH-20 marginT-20>
              <View minWidth={130}>
                <Text s14b style={{fontWeight: 'bold'}}>
                  {item?.Key}
                </Text>
              </View>
              <Text style={{flex: 1, flexWrap: 'wrap'}}>{item?.Value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ViewContainer>
  );
};

export default DetailStoreScreen;
