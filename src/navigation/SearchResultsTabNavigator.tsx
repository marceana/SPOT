import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import * as Base from '../../styles/base';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './Router';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route: RouteProp<RootStackParamList, 'SearchResultsTab'> = useRoute();
  const [posts, setPosts] = useState([]);
  const { vehicles, viewport } = route.params;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult: any = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                maxVehicles: {
                  ge: vehicles,
                },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          })
        );
        setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Base.colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: Base.colors.primary,
        },
      }}
    >
      <Tab.Screen name={'lista'}>{() => <SearchResults posts={posts} />}</Tab.Screen>
      <Tab.Screen name={'mapa'}>{() => <SearchResultsMap posts={posts} />}</Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
