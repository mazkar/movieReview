import {all} from 'redux-saga/effects';
import {SagaLoginWorker} from './../Screen/Login/Redux/LoginSaga';
import {SagaRegisterWorker} from '../Screen/Registration/Redux/RegisterSaga';

export function* allSagas() {
  yield all([SagaLoginWorker(), SagaRegisterWorker()]);
}
