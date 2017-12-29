const USER_INFO = {
  username: 'thienan',
  avatar: 'https://pbs.twimg.com/profile_images/934407443597074432/YkIEGOSA.jpg'
};

const INITIAL_STATE = USER_INFO;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
};
