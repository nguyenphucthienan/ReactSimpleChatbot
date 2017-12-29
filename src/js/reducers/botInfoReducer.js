const BOT_INFO = [
  {
    username: 'lowercase',
    avatar: 'https://pbs.twimg.com/media/DI902LPVAAAwFdd.jpg'
  },
  {
    username: 'UPPERCASE',
    avatar: 'https://pbs.twimg.com/media/DI9034wVoAAh7iU.jpg'
  },
  {
    username: 'snake_case',
    avatar: 'https://i.pinimg.com/originals/1e/d9/2e/1ed92e0c37de9d02485b6d03835d10a2.jpg'
  }
];

const INITIAL_STATE = BOT_INFO[0];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
