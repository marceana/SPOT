import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../components/Post';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

interface SearchProps {
  vehicles: number;
}

const SearchResultsScreen = (props: SearchProps) => {
  const [posts, setPosts] = useState([]);
  const { vehicles } = props;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult: any = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              maxVehicles: {
                ge: vehicles,
              },
            },
          })
        );
        console.log(postsResult);
        setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

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
