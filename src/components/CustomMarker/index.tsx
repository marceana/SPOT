import React from 'react';
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';

type CustomMarkerProps = {
  id: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  price: number;
  onPress: () => void;
  isSelected: boolean;
};

const CustomMarker = React.memo((props: CustomMarkerProps) => {
  const { id, coordinate, price, onPress, isSelected } = props;

  return (
    <Marker
      key={id}
      coordinate={coordinate}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 5,
          borderRadius: 20,
          borderColor: 'grey',
          borderWidth: 1,
        }}
      >
        <Text style={{ fontWeight: 'bold', color: isSelected ? 'white' : 'black' }}>R${price}</Text>
      </View>
    </Marker>
  );
});

export default CustomMarker;
