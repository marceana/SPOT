import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LocationSearchScreen from '../screens/LocationSearch';
import { NavigationContainer } from '@react-navigation/native';
import VehiclesScreen from '../screens/Vehicles';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Location Search'}
          component={LocationSearchScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Vehicles Screen'}
          component={VehiclesScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
