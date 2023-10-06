import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Pressable } from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const LocationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Onde você quer estacionar?"
        value={inputText}
        onChangeText={setInputText}
      ></TextInput>

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Vehicles Screen')}
            style={styles.row}
          >
            <View style={styles.iconContainer}>
              <Entypo
                name={'location-pin'}
                size={30}
              />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
};

export default LocationSearchScreen;
