import {combineReducers} from 'redux';
import {LoginReducer} from '../Screen/Login/Redux/LoginReducer';
import {GlobalReducer} from './globalReducer';
import {RegisterReducer} from '../Screen/Registration/Redux/RegisterReducer';

export const allReducers = combineReducers({
  LoginReducer,
  GlobalReducer,
  RegisterReducer,
});
