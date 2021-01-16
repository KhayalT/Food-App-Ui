import {StyleSheet} from 'react-native';
import COLORS from '../../../constant/colors';

const styles = StyleSheet.create ({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    bottom: 70,
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    top: 35,
  },
  bottomContainer: {
    backgroundColor: 'orange',
    height: '70%',
    width: '100%',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  bottomContentContainer: {
    marginVertical: 50,
    marginHorizontal: 30,
  },
  bottomContentContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomDescContainer: {
    width: '105%',
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
    height: 55,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 40,
  },
  heartIcon: {
    backgroundColor: '#ffff',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  nameText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    maxWidth: 200,
  },
  descText: {
    lineHeight: 20,
    color: 'white',
  },
  buttonText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
