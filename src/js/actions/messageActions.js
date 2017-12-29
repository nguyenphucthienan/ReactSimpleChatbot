import {
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from './types';

export const addMessage = (isBot, messageContent) => {
  return {
    type: ADD_MESSAGE,
    payload: { isBot, messageContent }
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES
  };
};
