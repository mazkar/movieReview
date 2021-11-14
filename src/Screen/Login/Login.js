import React, {useState} from 'react';
import {Image, Input} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';

//redux
import {useDispatch, useSelector} from 'react-redux';

//action
import {postLogin} from './Redux/LoginAction';

//cpmponent
import LoadingComp from '../../Component/loading';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const Loading = useSelector(state => state.GlobalReducer.loading);

  const onLogin = () => {
    dispatch(postLogin({email, password}));
  };

  if (Loading) {
    return <LoadingComp />;
  }
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.fiContainer}>
        <Image
          resizeMode="contain"
          style={Styles.Image}
          source={require('./../../Assets/Images/Logo.png')}
        />
        <Text style={Styles.whiteText}>MoveReact</Text>
      </View>

      <View>
        <Input
          placeholder="Email/Username"
          style={Styles.input}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          style={Styles.input}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>

      <View style={Styles.passwordContainer}>
        <Text style={Styles.password}>Forgot your password?</Text>
      </View>

      <View style={Styles.loginContainer}>
        <TouchableOpacity style={Styles.button} onPress={onLogin}>
          <Text style={Styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={Styles.signUp}>Don't have an account? Sign Up?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: ms(4),
    paddingVertical: ms(64),
  },
  fiContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    marginBottom: ms(10),
    height: ms(120),
    width: ms(120),
  },
  whiteText: {
    color: 'white',
    marginBottom: ms(65),
    fontFamily: 'robboto',
  },
  input: {
    paddingTop: ms(8),
    color: 'white',
  },
  passwordContainer: {
    paddingBottom: ms(20),
    alignItems: 'flex-end',
    paddingRight: ms(12),
  },
  password: {
    color: 'white',
  },
  button: {
    backgroundColor: '#2154BC',
    paddingTop: ms(4),
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(20),
    alignItems: 'center',
    paddingBottom: ms(6),
    width: ms(120),
    height: ms(44),
    justifyContent: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
  loginContainer: {
    alignItems: 'center',
    paddingBottom: ms(20),
  },
  signUp: {
    color: 'white',
    alignSelf: 'center',
  },
});
