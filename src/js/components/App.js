import React, { Component } from 'react';
import MessageInput from './MessageInput';
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
