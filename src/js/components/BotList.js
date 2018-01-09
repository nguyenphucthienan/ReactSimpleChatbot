import React, { Component } from 'react';
import { BOT_INFO } from '../constants';

import BotCard from './BotCard';

class BotList extends Component {
  render() {
    return (
      BOT_INFO.map(botInfo => (
        <BotCard
          key={botInfo.username}
          botInfo={botInfo}
        />
      ))
    );
  }
}

export default BotList;
