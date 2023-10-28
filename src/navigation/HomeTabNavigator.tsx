import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import * as Base from '../../styles/base';
import ExploreNavigator from '../navigation/ExploreNavigator';
import ProfileScreen from '../screens/Profile';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Base.colors.primary,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Explorar"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto
              name="search"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Curtidas'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="heart-o"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Spot'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="car"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Mensagens'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="message-circle"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Perfil'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons
              name="user"
              size={35}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
