import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import botInfoReducer from './botInfoReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  userInfo: userInfoReducer,
  botInfo: botInfoReducer,
  messages: messagesReducer
});
