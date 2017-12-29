import React, { Component } from 'react';
import MessageInput from './MessageInput';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import MessageList from './MessageList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <MessageList />
        </div>
        <MessageInput />
      </div>
    );
  }
}

export default App;
