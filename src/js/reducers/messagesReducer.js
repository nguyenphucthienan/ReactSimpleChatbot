import {
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from '../actions/types';

const INITIAL_STATE = [
  {
    isBot: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    sentAt: new Date().getTime()
  }, {
    isBot: false,
    content: 'Pellentesque at turpis pulvinar, bibendum dolor at, tempor magna. Fusce metus libero, elementum et purus non, aliquet lobortis tellus.',
    sentAt: new Date().getTime() + 1
  }, {
    isBot: true,
    content: 'Duis consequat pretium libero sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dapibus sagittis. Fusce pellentesque a libero at ultricies. In hac habitasse platea dictumst.',
    sentAt: new Date().getTime() + 2
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
};
