import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  garages: {
    marginVertical: 5,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 15,
    color: 'black',
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
