import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Input} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Style';
import {ms} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

//action
import {postRegister} from './Redux/RegisterAction';

//component
import LoadingComp from './../../Component/loading';

export default function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const dispatch = useDispatch();

  const onRegis = () => {
    dispatch(postRegister({email, password, fullName}));
  };

  const handleRegister = () => {
    onRegis();
  };

  const loading = useSelector(state => state.GlobalReducer.loading);

  if (loading) {
    return <LoadingComp />;
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('./../../Assets/Images/profile.png')}
        />
      </View>

      <View>
        <Input
          placeholder="fullname"
          style={styles.input}
          onChangeText={text => {
            setFullName(text);
          }}
        />

        <Input
          placeholder="Email"
          style={styles.input}
          onChangeText={text => {
            setEmail(text);
          }}
        />

        <Input
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>

      <View style={styles.signUpContainer}>
        <TouchableOpacity style={styles.buttonUp} onPress={handleRegister}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.already}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
