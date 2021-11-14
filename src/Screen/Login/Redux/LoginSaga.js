import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {setErrorLogin, postLogin, setTokenToLoginReducer} from './LoginAction';
import {navigate} from './../../../Utils/Navigation';
import {setLoading} from './../../../Store/globalAction';

function* sagaLogin(action) {
  try {
    yield put(setLoading(true));

    const result = yield axios.post(
      'https://movieapp-glints.herokuapp.com/api/v1/users/signin',
      action.payload,
    );
    console.log(result, 'result Login');
    if (result.status === 200) {
      yield put(setTokenToLoginReducer(result.data.data));
    }
  } catch (error) {
    console.log(error, 'error login');
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

export function* SagaLoginWorker() {
  yield takeLatest('POST_LOGIN', sagaLogin);
}
