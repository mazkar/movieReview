import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {navigate} from './../../../Utils/Navigation';

import {setSuccessRegister} from './RegisterAction';
import {setLoading} from './../../../Store/globalAction';
import {ToastAndroid} from 'react-native';

function* sagaRegister(action) {
  try {
    yield put(setLoading(true));
    const result = yield axios.post(
      'https://movieapp-glints.herokuapp.com/api/v1/users/signup',
      action.payload,
    );
    console.log(result, 'result register');

    if (result.status === 200) {
      yield put(setSuccessRegister());
      yield navigate('Login');
      ToastAndroid.showWithGravityAndOffset(
        'Registration Success',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        200,
      );
    }
  } catch (error) {
    console.log(error, 'error Register');
    ToastAndroid.showWithGravityAndOffset(
      'Email or Password is incorrect',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      200,
    );
  } finally {
    yield put(setLoading(false));
  }
}

export function* SagaRegisterWorker() {
  yield takeLatest('POST_REGISTER', sagaRegister);
}
