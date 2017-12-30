import React, { Component } from 'react';
import Header from './Header';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flex-wrapper">
          <Header />
          <main>
            <div className="row">
              <MessageList />
            </div>
            <div className="row">
              <MessageInput />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
