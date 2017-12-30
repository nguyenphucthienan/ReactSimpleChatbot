import React, { Component } from 'react';
import Header from './Header';
import BotInfo from './BotInfo';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="flex-wrapper">
        <Header />
        <main>
          <div className="row center-align">
            <BotInfo />
          </div>
          <div className="row">
            <MessageList />
          </div>
          <div className="row">
            <MessageInput />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
