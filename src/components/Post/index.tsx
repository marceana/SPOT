import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
      />
      <Text style={styles.garages}>2 carros</Text>
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil in repellat aut,
        voluptas nesciunt maxime eligendi iusto nemo, alias illum dignissimos hic cumque aspernatur
        accusantium ipsam aliquid tempora omnis.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>R$ 36</Text>
        <Text style={styles.price}> R$ 36</Text>/ noite
      </Text>
      <Text style={styles.totalPrice}>R$ 230 total</Text>
    </View>
  );
};

export default Post;
