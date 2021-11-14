import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: ms(4),
    paddingVertical: ms(4),
  },
  imgContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pencil: {
    backgroundColor: 'blue',
    width: ms(14),
    position: 'absolute',
  },
  image: {
    paddingBottom: ms(65),
    height: ms(120),
    width: ms(120),
  },
  input: {
    paddingTop: ms(8),
    color: 'white',
  },
  signUpContainer: {
    alignItems: 'center',
    paddingBottom: ms(20),
  },
  buttonUp: {
    backgroundColor: '#2154BC',
    paddingTop: ms(4),
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(30),
    alignItems: 'center',
    paddingBottom: ms(6),
    width: ms(120),
    height: ms(44),
    justifyContent: 'center',
    color: 'white',
  },
  signUpText: {
    color: 'white',
  },
  already: {
    color: 'white',
    alignSelf: 'center',
  },
});
