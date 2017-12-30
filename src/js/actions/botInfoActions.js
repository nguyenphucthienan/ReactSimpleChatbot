import { CHANGE_BOT } from './types';

export const changeBot = botIndex => ({
  type: CHANGE_BOT,
  payload: botIndex
});
