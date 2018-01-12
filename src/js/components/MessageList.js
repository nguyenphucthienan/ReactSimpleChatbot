import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

class MessageList extends Component {
  constructor() {
    super();
    this.scrollAtBottom = true;
    this.onScroll = this.onScroll.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.messages.length !== this.props.messages.length) {
      const { messageList } = this.refs;
      const { scrollHeight, clientHeight, scrollTop } = messageList;
      const scrollBottom = (scrollHeight - clientHeight);
      this.scrollAtBottom = (scrollBottom <= 0) || (scrollTop === scrollBottom);

      if (!this.scrollAtBottom) {
        const numOfMessages = messageList.childNodes.length;
        this.topMessage = numOfMessages === 0 ? null : messageList.childNodes[0];
      }
    }
  }

  componentDidUpdate() {
    if (this.scrollAtBottom) {
      this.scrollToBottom();
    }

    if (this.topMessage) {
      ReactDOM.findDOMNode(this.topMessage).scrollIntoView();
    }
  }

  scrollToBottom() {
    const { messageList } = this.refs;
    const { scrollHeight, clientHeight } = messageList;
    const maxScrollTop = scrollHeight - clientHeight;
    ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  onScroll() {
    const { scrollTop } = this.refs.messageList;

    if (scrollTop === 0) {
      console.log('Fetching old messages...');
    }
  }

  render() {
    const { userInfo, botInfo, messages } = this.props;

    return (
      <ul className="message-list" ref="messageList" onScroll={this.onScroll}>
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
