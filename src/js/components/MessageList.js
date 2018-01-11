import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

class MessageList extends Component {
  render() {
    const { userInfo, botInfo, messages } = this.props;

    return (
      <ul className="message-list">
        {
          messages.map((message) => {
            if (message.isBot) {
              return (
                <li key={message.messageId}>
                  <BotMessage
                    username={botInfo.username}
                    content={message.content}
                    messageId={message.messageId}
                  />
                </li>
              );
            }

            return (
              <li key={message.messageId}>
                <UserMessage
                  username={userInfo.username}
                  content={message.content}
                  messageId={message.messageId}
                />
              </li>
            );
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
