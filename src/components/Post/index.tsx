import React from 'react';
import { Image, Text, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Router';

interface PostProps {
  post: {
    id: string;
    image: string;
    type: string;
    title: string;
    oldPrice: number;
    price: number;
    totalPrice: number;
    latitude: number;
    longitude: number;
    maxVehicles: number;
  };
  date: string;
  time: string;
  duration: number;
}

const days = 7;

const Post = (props: PostProps) => {
  const post = props.post;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const goToPostPage = () => {
    navigation.navigate('Post', {
      post: post,
      date: props.date,
      time: props.time,
      duration: props.duration,
    });
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: post.image }}
      />
      <Text style={styles.garages}>{post.maxVehicles} veículos</Text>
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
      <Text style={styles.totalPrice}>R$ {post.price * days}</Text>
    </Pressable>
  );
};

export default Post;
