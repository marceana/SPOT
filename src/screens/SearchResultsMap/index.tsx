import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';

const SearchResultsMap = () => {
  const [selectedPlaceId, setselectedPlaceId] = useState('');
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <MapView
        style={{ height: '100%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.price}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setselectedPlaceId(place.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
