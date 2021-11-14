import React, {useState} from 'react';
import {Image, Input} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from './Styles';

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

  const navToLogin = () => {
    props.navigation.navigate('Register');
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
        <TouchableOpacity onPress={navToLogin}>
          <Text style={Styles.signUp}>Don't have an account? Sign Up?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
