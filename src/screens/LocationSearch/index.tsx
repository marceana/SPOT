import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const LocationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
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
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo
                name={'location-pin'}
                size={30}
              />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default LocationSearchScreen;
