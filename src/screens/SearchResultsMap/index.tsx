import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';
import { FlatList } from 'react-native-gesture-handler';
import * as Base from '../../../styles/base';
import { ViewToken } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState('');
  const [posts, setPosts] = useState([]);

  const width = Base.dimensions.fullWidth;

  const flatList = useRef<FlatList>(null);
  const map = useRef<MapView>(null);

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70, minimumViewTime: 500 });
  const onViewChange = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(graphqlOperation(listPosts));
        console.log(postsResult);
        setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = posts.findIndex((place) => place.id === selectedPlaceId);
    flatList.current?.scrollToIndex({ index });

    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };

    map.current?.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <MapView
        ref={map}
        style={{ height: '100%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {posts.map((place) => (
          <CustomMarker
            key={place.id}
            id={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            price={place.price}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{ position: 'absolute', bottom: 5 }}>
        <FlatList
          ref={flatList}
          data={posts}
          renderItem={({ item }) => (
            <PostCarouselItem
              key={item.id}
              post={item}
            />
          )}
          horizontal
          snapToInterval={width - 60}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChange.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
