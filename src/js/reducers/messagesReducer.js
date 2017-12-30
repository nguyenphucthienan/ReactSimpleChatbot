import {
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from '../actions/types';

const INITIAL_STATE = [{
  messageId: `BOT${new Date().getTime()}`,
  isBot: true,
  content: 'hi, i am lowercase.'
}];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload];
    case CLEAR_MESSAGES:
      return [];
    default:
      return state;
  }
}
