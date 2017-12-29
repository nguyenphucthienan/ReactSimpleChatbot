import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

class MessageList extends Component {
  render() {
    const { userInfo, botInfo, messages } = this.props;

    return (
      <ul className="message-list col s12">
        {
          messages.map((message) => {
            if (message.isBot) {
              return (
                <li key={message.sentAt}>
                  <BotMessage
                    username={botInfo.username}
                    content={message.content}
                    sentAt={message.sentAt}
                  />
                </li>
              );
            } else {
              return (
                <li key={message.sentAt}>
                  <UserMessage
                    username={userInfo.username}
                    content={message.content}
                    sentAt={message.sentAt}
                  />
                </li>
              );
            }
          })
        }
      </ul>
    );
  }
}

function mapStateToProps({ userInfo, botInfo, messages }) {
  return { userInfo, botInfo, messages };
}

export default connect(mapStateToProps)(MessageList);
