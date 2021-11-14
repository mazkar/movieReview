import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReduxSaga from 'redux-saga';
import logger from 'redux-logger';

import {allReducers} from './allReducer';
import {allSagas} from './allSaga';

const persistConfig = {
  key: 'moviereview',
  storage: AsyncStorage,
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const sagaMiddleWare = ReduxSaga();

export const Store = createStore(
  persistedReducer,
  {},
  applyMiddleware(logger, sagaMiddleWare),
);

export const Persistor = persistStore(Store);

sagaMiddleWare.run(allSagas);
