import React, { Component } from 'react';
import { BOT_INFO } from '../constants';

class Header extends Component {
  renderBotInfoList() {
    return BOT_INFO.map(bot => (
      <li key={bot.username}>
        <a>{bot.username}</a>
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
                {this.renderBotInfoList()}
              </ul>

              <ul className="side-nav" id="nav-mobile">
                {this.renderBotInfoList()}
              </ul>
            </div>
          </nav >
        </div>
      </header>
    );
  }
}

export default Header;
