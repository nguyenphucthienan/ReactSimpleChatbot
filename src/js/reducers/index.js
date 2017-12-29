import { combineReducers } from 'redux';
import botInfoReducer from './botInfoReducer';

export default combineReducers({
  botInfo: botInfoReducer
});
