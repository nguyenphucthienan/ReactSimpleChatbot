import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBot, addMessage, clearMessages, loadMessagesFromStorage } from '../actions';
import { BOT_INFO } from '../constants';
import { convertString } from './utils';

class Header extends Component {
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

  renderHeader() {
    return BOT_INFO.map((bot, index) => (
      <li key={bot.username}>
        <a onClick={() => this.handleChangeBot(index)}>{bot.username}</a>
      </li>
    ));
  }

  renderSideNav() {
    return BOT_INFO.map((bot, index) => (
      <li key={bot.username}>
        <a onClick={() => this.handleChangeBot(index)}>{bot.username}</a>
      </li>
    ));
  }

  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a className="brand-logo">
                <i className="material-icons">chat</i>React Chatbot
              </a>

              <a data-activates="nav-mobile" className="button-collapse pointer-cursor">
                <i className="material-icons">menu</i>
              </a>

              <ul className="right hide-on-med-and-down">
                {this.renderHeader()}
              </ul>

              <ul className="side-nav" id="nav-mobile">
                {this.renderSideNav()}
              </ul>
            </div>
          </nav >
        </div>
      </header>
    );
  }
}

export default connect(null, {
  changeBot,
  addMessage,
  clearMessages,
  loadMessagesFromStorage
})(Header);
