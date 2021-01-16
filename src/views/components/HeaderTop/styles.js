import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    marginHorizontal: 15,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {},
  rightContainer: {},
  text1: {
    fontSize: 25,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
    maxWidth: 180,
  },
  text3: {
    fontSize: 20,
    color: 'gray',
    top: 10,
  },
});

export default styles;
