import {
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from '../actions/types';

const INITIAL_STATE = [
  {
    messageId: `BOT${new Date().getTime()}`,
    isBot: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    messageId: `USER${new Date().getTime()}`,
    isBot: false,
    content: 'Pellentesque at turpis pulvinar, bibendum dolor at, tempor magna. Fusce metus libero, elementum et purus non, aliquet lobortis tellus.'
  },
  {
    messageId: `BOT${new Date().getTime() + 1}`,
    isBot: true,
    content: 'Duis consequat pretium libero sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dapibus sagittis. Fusce pellentesque a libero at ultricies. In hac habitasse platea dictumst.'
  }
];

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
