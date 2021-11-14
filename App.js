import React from 'react';
import {View, Text} from 'react-native';

//Redux
import {Provider} from 'react-redux';
import {Persistor, Store} from './../reactNativeMovie/src/Store/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';

import Root from './root';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}
