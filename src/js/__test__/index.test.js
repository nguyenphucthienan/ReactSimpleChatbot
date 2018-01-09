import botInfoReducer from '../reducers/botInfoReducer';
import messagesReducer from '../reducers/messagesReducer';

import {
  CHANGE_BOT,
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from '../actions/types';

import { BOT_INFO } from '../constants';

const BOT_INDEX = 3;

describe('BotInfo', () => {
  it('should have initial bot is \'lowercase\'', () => {
    expect(botInfoReducer(undefined, {}).username)
      .toEqual('lowercase');
  });

  it('should change bot', () => {
    expect(botInfoReducer(BOT_INFO[0], {
      type: CHANGE_BOT,
      payload: BOT_INDEX
    }))
      .toEqual(BOT_INFO[BOT_INDEX]);
  });
});

describe('Messages', () => {
  it('should have initial state', () => {
    expect(messagesReducer(undefined, {})[0])
      .toBeTruthy();
  });

  it('should have empty state', () => {
    expect(messagesReducer(undefined, {
      type: CLEAR_MESSAGES
    }))
      .toEqual([]);
  });

  it('should have messages length of 2', () => {
    expect(messagesReducer(undefined, {
      type: ADD_MESSAGE,
      payload: {
        messageId: `BOT${new Date().getTime()}`,
        isBot: true,
        content: 'test lowercase'
      }
    }))
      .toHaveLength(2);
  });
});
