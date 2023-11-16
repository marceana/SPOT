import { StyleSheet } from 'react-native';
import * as Base from '../../../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  row: {
    paddingVertical: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  button: {
    backgroundColor: Base.colors.primary,
    width: '70%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  navButton: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 50,
    marginRight: 15,
    marginTop: 5,
    width: 45,
    alignSelf: 'center',
  },
});

export default styles;
