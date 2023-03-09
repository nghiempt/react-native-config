/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ScrollView, SafeAreaView, Alert} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {DrawerActions, DrawerActionType} from '@react-navigation/native';
import colors from '../styles/colors';
import {useDispatch} from 'react-redux';
import {HomeActions} from '../modules/Home/Home.State';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {logout} from '../modules/Login/Login.Api';

const DATA = [
  {
    id: 0,
    name: 'Trang chủ',
    urlIcon: 'home-analytics',
    navigation: 'Home',
    dispatch: HomeActions.reset(),
    menu: [],
    packages: [1, 2],
  },
  {
    id: 1,
    name: 'Quy hoạch',
    urlIcon: 'layers-triple',
    navigation: 'Layer',
    dispatch: HomeActions.reset(),
    menu: [],
    packages: [1, 2],
  },
  {
    id: 2,
    name: 'Cửa hàng',
    urlIcon: 'map-legend',
    navigation: 'Store',
    dispatch: HomeActions.reset(),
    menu: [],
    packages: [1, 2],
  },
  {
    id: 3,
    name: 'Lưu trữ',
    urlIcon: 'content-save-cog-outline',
    navigation: 'Store',
    dispatch: HomeActions.reset(),
    menu: [],
    packages: [1, 2],
  },
  {
    id: 4,
    name: 'Thông báo',
    urlIcon: 'bell-outline',
    navigation: 'Store',
    dispatch: HomeActions.reset(),
    menu: [],
    packages: [1, 2],
  },
  {
    id: 5,
    name: 'Cài đặt',
    urlIcon: 'power-settings',
    navigation: 'Store',
    dispatch: HomeActions.reset(),
    packages: [1, 2],
    menu: [
      {
        id: 10,
        name: 'Hồ sơ',
        urlIcon: 'account-arrow-right-outline',
        navigation: 'Store',
        dispatch: HomeActions.reset(),
        package: [1, 2],
      },
      {
        id: 11,
        name: 'Lịch sử',
        urlIcon: 'history',
        navigation: 'Store',
        dispatch: HomeActions.reset(),
        package: [1, 2],
      },
    ],
  },
];

export default function DrawerContent(props: {
  state: {index: number};
  navigation: {
    dispatch: (arg0: DrawerActionType) => void;
    navigate: (arg0: any) => void;
  };
}) {
  const dispatch = useDispatch();

  function confirmLogout() {
    Alert.alert(
      'Xác nhận',
      'Chắc chắn đăng xuất tài khoản',
      [
        {
          text: 'Đăng xuất',
          onPress: () => dispatch(logout()),
          style: 'cancel',
        },
        {text: 'Hủy', onPress: () => {}},
      ],
      {cancelable: true},
    );
  }

  function ItemMenu(item: {
    menu: any[];
    id: React.SetStateAction<number>;
    urlIcon: string;
    name: {} | null | undefined;
    navigation: any;
    dispatch: any;
  }) {
    const [showMenu, setShowMenu] = React.useState(false);
    const [index, setIndex] = React.useState(-1);

    useEffect(() => {
      if (item.menu.length > 0) {
        item.menu.map((m: {id: React.SetStateAction<number>}) => {
          if (m.id === props.state.index + 1) {
            setShowMenu(true);
            setIndex(m.id);
          }
        });
      } else {
        setIndex(item.id);
      }
    }, [item]);

    if (item.menu.length > 0) {
      return (
        <>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            spread
            backgroundColor={
              props.state.index === index && !showMenu
                ? colors.placeholder_light
                : colors.white
            }
            onPress={() => setShowMenu(!showMenu)}>
            <View row centerV>
              <MaterialCommunityIcons
                name={item.urlIcon}
                size={18}
                color="#000"
                style={{marginRight: 10}}
              />
              <Text s14b style={{fontWeight: 'bold'}}>
                {item.name}
              </Text>
            </View>
            {showMenu ? (
              <MaterialCommunityIcons
                name="blinds-open"
                size={18}
                color="#777"
                style={{marginRight: 10}}
              />
            ) : (
              <MaterialCommunityIcons
                name="blinds-open"
                size={18}
                color="#777"
                style={{marginRight: 10}}
              />
            )}
          </TouchableOpacity>
          {showMenu && (
            <View>
              {item.menu.map(
                (itemMenu: {
                  id: React.Key | null | undefined;
                  navigation: any;
                  dispatch: any;
                  urlIcon: any;
                  name:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => {
                  return (
                    <TouchableOpacity
                      key={itemMenu.id}
                      style={{
                        paddingHorizontal: 15,
                        paddingVertical: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                      paddingL-50
                      spread
                      backgroundColor={
                        props.state.index + 1 === itemMenu.id
                          ? colors.placeholder_light
                          : colors.white
                      }
                      onPress={() => {
                        props.navigation.dispatch(DrawerActions.closeDrawer());
                        props.navigation.navigate(itemMenu.navigation);
                        dispatch(itemMenu.dispatch);
                      }}>
                      <View row centerV>
                        <MaterialCommunityIcons
                          name={itemMenu.urlIcon}
                          size={18}
                          color="#000"
                          style={{marginRight: 10}}
                        />
                        <Text s14b style={{fontWeight: 'bold'}}>
                          {itemMenu.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                },
              )}
            </View>
          )}
        </>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          backgroundColor={
            props.state.index === index
              ? colors.placeholder_light
              : colors.white
          }
          onPress={() => {
            props.navigation.dispatch(DrawerActions.closeDrawer());
            props.navigation.navigate(item.navigation);
            dispatch(item?.dispatch);
          }}>
          <MaterialCommunityIcons
            name={item.urlIcon}
            size={18}
            color="#000"
            style={{marginRight: 10}}
          />
          <Text s14b style={{fontWeight: 'bold'}}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View flex>
      <SafeAreaView style={{backgroundColor: colors.main}} />
      <View
        style={{
          backgroundColor: colors.main,
          paddingHorizontal: 15,
          flexDirection: 'row',
          paddingVertical: 18,
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          style={{marginRight: 20}}
          name="account-circle-outline"
          size={30}
          color={colors.white}
        />
        <View flex>
          <View row spread marginT-5>
            <Text white s14b style={{fontWeight: 'bold'}}>
              {/* {user.name} */}
              Admin
            </Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((item, index) => {
          return <ItemMenu key={index} {...item} />;
        })}
      </ScrollView>
      <TouchableOpacity
        paddingH-20
        marginV-30
        onPress={() => {
          confirmLogout();
        }}>
        <View row>
          <MaterialCommunityIcons name="logout" size={20} />
          <Text style={{marginLeft: 10, fontWeight: 'bold'}} s14b>
            Đăng xuất
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
