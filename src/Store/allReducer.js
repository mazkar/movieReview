import {combineReducers} from 'redux';
import {LoginReducer} from '../Screen/Login/Redux/LoginReducer';
import {GlobalReducer} from './globalReducer';

export const allReducers = combineReducers({
  LoginReducer,
  GlobalReducer,
});
