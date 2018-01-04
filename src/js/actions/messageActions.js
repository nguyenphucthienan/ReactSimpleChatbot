import {
  LOAD_MESSAGES,
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from './types';

export const loadMessagesFromStorage = botIndex => async (dispatch) => {
  const storageKey = `REACTCHATBOT${botIndex}`;

  let messagesInStorage = await localStorage.getItem(storageKey);

  if (messagesInStorage) {
    messagesInStorage = JSON.parse(messagesInStorage);

    dispatch({ type: LOAD_MESSAGES, payload: messagesInStorage });
  } else {
    await localStorage.setItem(storageKey, JSON.stringify([]));

    dispatch({ type: LOAD_MESSAGES, payload: [] });
  }
};

export const clearMessages = botIndex => async (dispatch) => {
  const storageKey = `REACTCHATBOT${botIndex}`;
  await localStorage.removeItem(storageKey);

  dispatch({ type: CLEAR_MESSAGES });
};

export const addMessage = (messageId, isBot, botIndex, content) => async (dispatch) => {
  const message = {
    messageId,
    isBot,
    content
  };

  const storageKey = `REACTCHATBOT${botIndex}`;

  let messagesInStorage = await localStorage.getItem(storageKey);

  if (messagesInStorage) {
    messagesInStorage = JSON.parse(messagesInStorage);
    messagesInStorage.push(message);

    await localStorage.removeItem(storageKey);
    await localStorage.setItem(storageKey, JSON.stringify(messagesInStorage));
  }

  dispatch({ type: ADD_MESSAGE, payload: message });
};
