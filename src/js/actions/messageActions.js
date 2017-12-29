import {
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from './types';

export const addMessage = (isBot, content) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      isBot,
      content,
      sentAt: new Date()
    }
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES
  };
};
