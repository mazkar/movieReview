import React from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../Utils/Colors';

export default function LoadingComp() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator animating color="#f3ad2e" size={moderateScale(50)} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
