import React from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
      >
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Location Search')}
        >
          <Fontisto
            name="search"
            size={20}
            color="#04afb9"
          />
          <Text style={styles.buttonText}>Onde você quer estacionar?</Text>
        </Pressable>
        <Text style={styles.title}>Estacione agora</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explorar botão clicado')}
        >
          <Text style={styles.buttonText}>Explorar vagas</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
