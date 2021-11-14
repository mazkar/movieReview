import {combineReducers} from 'redux';
import {LoginReducer} from '../Screen/Login/Redux/LoginReducer';

export const allReducers = combineReducers({
  LoginReducer,
});
