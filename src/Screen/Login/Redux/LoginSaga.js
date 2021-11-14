import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {setErrorLogin, postLogin, setTokenToLoginReducer} from './LoginAction';
import {navigate} from './../../../Utils/Navigation';

function* sagaLogin(action) {
  try {
    const result = yield axios.post(
      'https://movieapp-glints.herokuapp.com/api/v1/users/signin',
    );
    console.log(result, 'result Login');
    if (result.status === 200) {
      yield put(setTokenToLoginReducer(result));
    }
  } catch (error) {
    console.log(error, 'error login');
  }
}

export function* SagaLoginWorker() {
  yield takeLatest('POST_LOGIN', sagaLogin);
}
