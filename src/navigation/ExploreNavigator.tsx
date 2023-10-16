import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsScreen}
        options={{
          title: 'Procure sua vaga',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
