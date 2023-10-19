import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import * as Base from '../../../styles/base';

interface PostProps {
  post: {
    id: string;
    image: string;
    type: string;
    title: string;
    garage: number;
    price: number;
  };
}

const Post = (props: PostProps) => {
  const post = props.post;
  const width = Base.dimensions.fullWidth;

  return (
    <View style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{ uri: post.image }}
        />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={styles.garages}>{post.garage} carros</Text>
          <Text
            style={styles.description}
            numberOfLines={2}
          >
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.price}>R$ {post.price}</Text>/noite
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
