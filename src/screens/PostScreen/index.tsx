import React from 'react';
import { View, Text } from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Router';

import posts from '../../../assets/data/feed';

const PostScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Post'>>();

  const post = route.params.post;

  return (
    <View>
      <DetailedPost post={post}></DetailedPost>
    </View>
  );
};

export default PostScreen;
