import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../components/Post';
interface SearchProps {
  posts: Array<any>;
  date: string;
  time: string;
  duration: number;
}

const SearchResultsScreen = (props: SearchProps) => {
  const { posts } = props;
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            post={item}
            date={props.date}
            time={props.time}
            duration={props.duration}
          />
        )}
      />
    </View>
  );
};

export default SearchResultsScreen;
