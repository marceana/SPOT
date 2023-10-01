import React from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
      >
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn('Procurar botão clicado')}
        >
          <Fontisto name="search" size={20} color="#f15454" />
          <Text style={styles.buttonText}>Onde você quer estacionar?</Text>
        </Pressable>
        <Text style={styles.title}>Estacione agora</Text>
        <Pressable style={styles.button} onPress={() => console.warn('Explorar botão clicado')}>
          <Text style={styles.buttonText}>Explorar vagas</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
