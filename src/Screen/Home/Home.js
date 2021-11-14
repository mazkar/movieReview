import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

//action
import {logout} from '../Login/Redux/LoginAction';
import {setIsLogged} from '../../Store/globalAction';

export default function Home(props) {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(setIsLogged(false));
  };
  const logoutNav = () => {
    props.navigation.navigate('Login');
  };

  const handleLogout = () => {
    onLogout();
    logoutNav();
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({});
