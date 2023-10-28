import React from 'react';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

import { withAuthenticator } from 'aws-amplify-react-native';

function App(): JSX.Element {
  return <Router />;
}

export default withAuthenticator(App);
