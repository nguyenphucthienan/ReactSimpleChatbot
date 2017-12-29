import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer'
import botInfoReducer from './botInfoReducer';

export default combineReducers({
  userInfo: userInfoReducer,
  botInfo: botInfoReducer
});
