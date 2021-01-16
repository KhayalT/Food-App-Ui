import {StyleSheet} from 'react-native';
import COLORS from '../../../constant/colors';

const styles = StyleSheet.create ({
  container: {
    marginLeft: 20,
    flexDirection: 'row',
    marginVertical: 25,
    width: '100%',
    marginHorizontal: 5,
  },
  leftContainer: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    left: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 50,
  },
  text: {
    fontSize: 20,
    color: 'grey',
    marginLeft: 10,
  },
});

export default styles;
