import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#04afb9',
  secondary: '#20495d',
  tertiary: '#04e0d6',
  quaternary: '#f89f40',
  quinary: '#079584',
  senary: '#1b80a2',
  light: '#c8e1de',
  dark: '#53656d',
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin',
};
