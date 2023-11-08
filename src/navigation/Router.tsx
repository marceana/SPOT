import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LocationSearchScreen from '../screens/LocationSearch';
import { NavigationContainer } from '@react-navigation/native';
import VehiclesScreen from '../screens/Vehicles';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen';

export type RootStackParamList = {
  Home:
    | { screen: string; params: { screen: string } }
    | { screen: string; params: { screen: string; params: { vehicles: number; viewport: any } } }
    | undefined;
  LocationSearch: undefined;
  VehiclesScreen: undefined;
  Post: { postId: string };
  SearchResultsTab: { vehicles: number; viewport: any };
};

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'LocationSearch'}
          component={LocationSearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'VehiclesScreen'}
          component={VehiclesScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
