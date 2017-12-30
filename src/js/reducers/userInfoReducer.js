import { USER_INFO } from '../constants';

const INITIAL_STATE = USER_INFO;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
