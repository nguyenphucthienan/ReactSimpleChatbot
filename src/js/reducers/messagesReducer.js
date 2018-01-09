import {
  LOAD_MESSAGES,
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from '../actions/types';

const INITIAL_STATE = JSON.parse(localStorage.getItem('REACTCHATBOT0')) || [{
  messageId: `BOT${new Date().getTime()}`,
  isBot: true,
  content: 'hi, i am lowercase.'
}];

// const INITIAL_STATE = [{
//   messageId: `BOT${new Date().getTime()}`,
//   isBot: true,
//   content: 'hi, i am lowercase.'
// }];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return action.payload;
    case CLEAR_MESSAGES:
      return [];
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
