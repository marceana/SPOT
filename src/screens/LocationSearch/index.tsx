import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationSearchScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Onde você quer estacionar?"
        onPress={(data, details = null) => {
          navigation.navigate('DateTimePicker', { viewport: details?.geometry.viewport });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'pt-br',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default LocationSearchScreen;
