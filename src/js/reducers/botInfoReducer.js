const BOT_INFO = [
  {
    username: 'lowercase',
    avatar: ''
  },
  {
    username: 'UPPERCASE',
    avatar: ''
  },
  {
    username: 'snake_case',
    avatar: ''
  }
];

const INITIAL_STATE = BOT_INFO[0];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
