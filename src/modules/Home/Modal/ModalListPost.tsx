/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Modal, Text, View} from 'react-native-ui-lib';
import colors from '../../../styles/colors';
import {Keyboard, TouchableNativeFeedback, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Post from '../Components/Post';
import { listPost } from '../listPost';

export default function ModalListPost({props}: {props: any}) {
  return (
    props.activeModalListPost ? <View
          height="70%"
          backgroundColor={colors.white}
          style={{
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
            marginTop: 'auto',
          }}>
          <View padding-10>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingVertical: 6,
                paddingHorizontal: 6,
                marginBottom: 20,
              }}>
              <View />
              <Text text50>Danh sách bản đồ quy hoạch</Text>
              <TouchableNativeFeedback onPress={() => props.setActiveModalListPost(false)}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={24}
                color="#000"
              />
              </TouchableNativeFeedback>
            </View>
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}>
              {listPost.map((post, index) => {
                return (
                  <View key={index}>
                    <Post post={post} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View> : null
  );
}
