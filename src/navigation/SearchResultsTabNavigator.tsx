import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import * as Base from '../../styles/base';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './Router';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route: RouteProp<RootStackParamList, 'SearchResultsTab'> = useRoute();
  const { vehicles } = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Base.colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: Base.colors.primary,
        },
      }}
    >
      <Tab.Screen name={'lista'}>{() => <SearchResults vehicles={vehicles} />}</Tab.Screen>
      <Tab.Screen name={'mapa'}>{() => <SearchResultsMap vehicles={vehicles} />}</Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
