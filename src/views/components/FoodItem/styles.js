import {StyleSheet} from 'react-native';
import COLORS from '../../../constant/colors';

const styles = StyleSheet.create ({
  container: {
    width: '45%',
    aspectRatio: 1 / 1.2,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    margin: 8,
    marginTop: 80,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    left: 10,
    bottom: 20,
  },
  iconContainer: {
    alignItems: 'flex-end',
    bottom: 30,
    right: 20,
  },
  image: {
    width: 120,
    height: 120,
    bottom: 60,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: 140,
  },
  text2: {
    color: COLORS.grey,
    marginVertical: 7,
    maxWidth: 120,
  },
  text3: {
    fontWeight: 'bold',
    maxWidth: 100,
  },
});

export default styles;
