import {
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from './types';

export const addMessage = (messageId, isBot, content) => ({
  type: ADD_MESSAGE,
  payload: {
    messageId,
    isBot,
    content,
  }
});

export const clearMessages = () => ({
  type: CLEAR_MESSAGES
});
