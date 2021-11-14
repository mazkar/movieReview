import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/Utils/Navigation';
import {useSelector} from 'react-redux';

//Screem
import Home from './src/Screen/Home/Home';
import Login from './src/Screen/Login/Login';
import Register from './src/Screen/Registration/Register';

const Stack = createStackNavigator();

export default function Root() {
  const token = useSelector(state => state.LoginReducer.access_token);
  const logged = useSelector(state => state.GlobalReducer.isLogged);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={token.length > 1 ? 'Home' : 'Login'}>
        {logged ? (
          <>
            <Stack.Screen
              component={Home}
              name="Home"
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              component={Login}
              name="Login"
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={Register}
              name="Register"
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
