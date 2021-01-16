import {StyleSheet} from 'react-native';
import COLORS from '../../../constant/colors';

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 10,
    height: 120,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  rightContainer: {
    marginLeft: 20,
  },
  countContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    width: 90,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    left: 10,
    justifyContent: 'space-evenly',
  },
  image: {
    width: 95,
    height: 95,
    left: 10,
  },
  text1: {
    fontSize: 17,
    fontWeight: 'bold',
    width: 120,
  },
  text2: {
    color: COLORS.grey,
    marginVertical: 7,
    width: 110,
  },
  text3: {
    fontWeight: 'bold',
    maxWidth: 110,
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 10,
  },
  numberText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default styles;
