/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import App from './App.tsx';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
Amplify.configure(config);
