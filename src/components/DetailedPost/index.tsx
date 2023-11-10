import React from 'react';
import { View, Image, Text, ScrollView, Pressable } from 'react-native';
import styles from './styles';

interface PostProps {
  post: {
    id: string;
    image: string;
    type: string;
    title: string;
    description: string;
    oldPrice: number;
    price: number;
    totalPrice: number;
    latitude: number;
    longitude: number;
    maxVehicles: number;
  };
}

const PostScreen = (props: PostProps) => {
  const post = props.post;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: post.image }}
        />
        <Text style={styles.garages}>{post.maxVehicles} carros</Text>
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
        {/* <Text style={styles.totalPrice}>R$ {post.totalPrice}</Text> */}

        <Text style={styles.longDescription}>{post.description}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Reservar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default PostScreen;
