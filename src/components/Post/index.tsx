import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

interface PostProps {
  post: {
    id: string;
    image: string;
    type: string;
    title: string;
    garage: number;
    oldPrice: number;
    price: number;
    totalPrice: number;
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
}

const Post = (props: PostProps) => {
  const post = props.post;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: post.image }}
      />
      <Text style={styles.garages}>{post.garage} carros</Text>
      <Text
        style={styles.description}
        numberOfLines={2}
      >
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>R$ {post.oldPrice}</Text>
        <Text style={styles.price}> R$ {post.price}</Text>/noite
      </Text>
      <Text style={styles.totalPrice}>R$ {post.totalPrice}</Text>
    </View>
  );
};

export default Post;
