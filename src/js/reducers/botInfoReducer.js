import { CHANGE_BOT } from '../actions/types';
import { BOT_INFO } from '../constants';

const INITIAL_STATE = BOT_INFO[0];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_BOT:
      return BOT_INFO[action.payload];
    default:
      return state;
  }
}
