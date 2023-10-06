import React from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';

function App(): JSX.Element {
  return <Router />;
}

export default App;
