import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Router';

import styles from './styles';
import * as Base from '../../../styles/base';

const VehiclesScreen = () => {
  const [cars, setCars] = useState(1);
  const [motorcycles, setMotorcycles] = useState(0);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();

  return (
    <View style={{ justifyContent: 'space-between', height: Base.dimensions.fullHeight }}>
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
      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explorar',
            params: {
              screen: 'SearchResults',
              params: {
                vehicles: cars + motorcycles,
                viewport: route.params!.viewport,
              },
            },
          })
        }
        style={{
          marginBottom: 30,
          backgroundColor: Base.colors.secondary,
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: Base.fonts.md, color: 'white', fontWeight: 'bold' }}>
          Procurar
        </Text>
      </Pressable>
    </View>
  );
};

export default VehiclesScreen;
