import React, { Component } from 'react';
import { BOT_INFO } from '../constants';

import BotCard from './BotCard';

class BotList extends Component {
  render() {
    return (
      <div>
        {
          BOT_INFO.map(botInfo => (
            <BotCard
              key={botInfo.username}
              botInfo={botInfo}
            />
          ))
        }
      </div>
    );
  }
}

export default BotList;
