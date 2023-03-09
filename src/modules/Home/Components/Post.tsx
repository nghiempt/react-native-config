/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../styles/colors';

function Post({ post }: { post: any; }) {
    const navigation = useNavigation<any>();

    return (
        <>
            <View
                style={{
                    width: '100%',
                    marginBottom: 10,
                    padding: 10,
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Image
                    source={post.image}
                    style={{
                        width: '20%',
                        height: 100,
                        resizeMode: 'contain',
                    }} />
                <View flex marginL-10>
                    <Text
                        text70
                        style={{ flexWrap: 'wrap', fontWeight: 'bold' }}>
                        {post.title}
                    </Text>
                    <Text>{post.address}</Text>
                    <Text style={{ fontWeight: 'bold', color: colors.green }}>
                        {post.status}
                    </Text>
                    <Text>Lượt xem: {post.view}</Text>
                </View>
            </View><View
                style={{
                    width: '100%',
                    padding: 1,
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#f2f2f2',
                }} /><View
                    style={{
                        backgroundColor: colors.frebrick,
                        position: 'absolute',
                        paddingHorizontal: 5,
                        borderRadius: 2,
                    }}>
                <Text white text90>
                    {post.distance} km
                </Text>
            </View>
        </>
    );
}

export default Post;
