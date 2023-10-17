import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import * as Base from '../../styles/base';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Base.colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: Base.colors.primary,
        },
      }}
    >
      <Tab.Screen
        name={'lista'}
        component={SearchResults}
      />
      <Tab.Screen
        name={'mapa'}
        component={SearchResults}
      />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;