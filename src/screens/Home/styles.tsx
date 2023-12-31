import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('screen').height,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    marginLeft: 25,
    marginTop: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
