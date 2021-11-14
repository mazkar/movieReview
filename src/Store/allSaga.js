import {all} from 'redux-saga/effects';
import {SagaLoginWorker} from './../Screen/Login/Redux/LoginSaga';

export function* allSagas() {
  yield all([SagaLoginWorker()]);
}
