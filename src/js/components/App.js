import React, { Component } from 'react';
import Header from './Header';
import BotInfo from './BotInfo';
import BotList from './BotList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="flex-wrapper">
        <Header />
        <main>
          <div className="row">
            <div className="col s4">
              <BotInfo />
              <BotList />
            </div>
            <div className="col s8">
              <MessageList />
              <MessageInput />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
