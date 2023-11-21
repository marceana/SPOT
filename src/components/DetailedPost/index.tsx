import React, { useState } from 'react';
import { View, Image, Text, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import { API, graphqlOperation } from 'aws-amplify';
import { createReservation } from '../../graphql/mutations';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

const PostScreen = () => {
  const route = useRoute();
  const { post, date, time, duration } = route.params;
  const [reservationStatus, setReservationStatus] = useState('');
  const [reservationStatusStyle, setReservationStatusStyle] = useState(styles.successText);

  const createReservationHandler = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;

      const reservationData = {
        input: {
          userId: userId,
          postId: post.id,
          Date: new Date(date).toISOString(),
          Time: new Date(time).toISOString(),
          Duration: duration,
          Total: duration * post.price,
        },
      };

      const response = await API.graphql(graphqlOperation(createReservation, reservationData));

      console.log('Reserva criada com sucesso:', response.data.createReservation);
      setReservationStatus('Reserva criada com sucesso!');
      setReservationStatusStyle(styles.successText);
    } catch (error) {
      console.error('Erro ao criar reserva:', error);
      setReservationStatus('Erro ao criar reserva. Tente novamente.');
      setReservationStatusStyle(styles.errorText);
    }
  };

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
          <Text style={styles.price}> R$ {post.price}</Text>/1 hora
        </Text>
        <Text style={styles.totalPrice}>R$ {duration * post.price}</Text>

        <Text style={styles.longDescription}>{post.description}</Text>
        <Pressable
          style={styles.button}
          onPress={createReservationHandler}
        >
          <Text style={styles.buttonText}>Reservar</Text>
        </Pressable>
        {reservationStatus && <Text style={reservationStatusStyle}>{reservationStatus}</Text>}
      </View>
    </ScrollView>
  );
};

export default PostScreen;
