import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBot, loadMessagesFromStorage, addMessage } from '../actions';
import { BOT_INFO } from '../constants';
import { convertString } from './utils';

class BotCard extends Component {
  constructor() {
    super();
    this.handleChangeBot = this.handleChangeBot.bind(this);
  }

  async handleChangeBot(botIndex) {
    this.props.changeBot(botIndex);
    await this.props.loadMessagesFromStorage(botIndex);

    const messageId = `BOT${new Date().getTime()}`;
    const botUsername = BOT_INFO[botIndex].username;
    const messageContent = convertString(botUsername, `Hi, I'm ${botUsername}.`);
    this.props.addMessage(messageId, true, botIndex, messageContent);
  }

  render() {
    const { index, username, avatar } = this.props.botInfo;

    return (
      <div
        className="col s12 pointer-cursor"
        onClick={() => this.handleChangeBot(index)}
      >
        <div className="card horizontal z-depth-2">
          <div className="valign-wrapper">
            <img className="bot-card-avatar" src={avatar} alt="avatar" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p className="bot-card-username center-align">{username}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  changeBot,
  addMessage,
  loadMessagesFromStorage
})(BotCard);
