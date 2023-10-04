import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const VehiclesScreen = () => {
  const [cars, setCars] = useState(0);
  const [motorcycles, setMotorcycles] = useState(0);
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={{ fontWeight: 'bold' }}>Carros</Text>
          <Text style={{ color: '#8d8d8d' }}>Automotor ou elétrico</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
            onPress={() => setCars(Math.max(0, cars - 1))}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
          </Pressable>
          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{cars}</Text>
          <Pressable
            onPress={() => setCars(cars + 1)}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{ fontWeight: 'bold' }}>Motocicletas</Text>
          <Text style={{ color: '#8d8d8d' }}>Automotora ou elétrica</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
            onPress={() => setMotorcycles(Math.max(0, motorcycles - 1))}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
          </Pressable>
          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{motorcycles}</Text>
          <Pressable
            onPress={() => setMotorcycles(motorcycles + 1)}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default VehiclesScreen;
