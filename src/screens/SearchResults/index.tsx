import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../components/Post';
interface SearchProps {
  posts: Array<any>;
}

const SearchResultsScreen = (props: SearchProps) => {
  const { posts } = props;

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
