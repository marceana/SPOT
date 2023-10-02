import React from 'react';
import { SafeAreaView } from 'react-native';

import HomeScreen from './src/screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
