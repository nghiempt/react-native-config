/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {View, Text, TouchableOpacity, Image} from 'react-native-ui-lib';
import colors from '../../styles/colors';
import ViewContainer from '../../components/ViewContainer';
import {Images} from '../../constant/image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../components/Input';
import ButtonCustom from '../../components/ButtonCustom';
import {useDispatch} from 'react-redux';
import {login} from './Login.Api';

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(true);

  const submit = () => {
    console.log(username, password);
    Keyboard.dismiss();
    dispatch(login({username, password}));
  };

  return (
    <ViewContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' && 'padding'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View flex centerV padding-20>
            <View centerH marginB-50>
              <Image
                source={Images.LOGO}
                style={{
                  width: '80%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View>
              <Input
                leftIcon={
                  <MaterialCommunityIcons
                    name="account-multiple-outline"
                    size={20}
                  />
                }
                background={colors.placeholder_light2}
                placeholder="Nhập tên tài khoản"
                onChangeText={setUsername}
                value={username}
              />
              <Input
                leftIcon={
                  <View marginL-15>
                    <MaterialCommunityIcons name="key-outline" size={20} />
                  </View>
                }
                rightIcon={
                  <View>
                    <MaterialCommunityIcons
                      name="eye-settings-outline"
                      size={20}
                    />
                  </View>
                }
                background={colors.placeholder_light2}
                placeholder="Nhập mật khẩu"
                hideTextInput={showPassword}
                value={password}
                onChangeText={setPassword}
                pressRight={() => setShowPassword(!showPassword)}
              />
              <TouchableOpacity onPress={() => {}}>
                <View right padding-5 marginT-5>
                  <Text blue10>Quên mật khẩu?</Text>
                </View>
              </TouchableOpacity>
              <View marginT-30 />
              <KeyboardAvoidingView>
                <ButtonCustom
                  label="Đăng nhập"
                  background={colors.main}
                  onPress={() => submit()}
                />
              </KeyboardAvoidingView>
              <TouchableOpacity onPress={() => {}}>
                <View padding-5 center marginT-20>
                  <Text>Tạo tài khoản mới</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ViewContainer>
  );
};

export default LoginScreen;
