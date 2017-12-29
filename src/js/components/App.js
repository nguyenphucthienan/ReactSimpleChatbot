import React, { Component } from 'react';
import MessageInput from './MessageInput';
import UserMessage from './UserMessage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <UserMessage content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <UserMessage content=" Pellentesque at turpis pulvinar, bibendum dolor at, tempor magna. Fusce metus libero, elementum et purus non, aliquet lobortis tellus." />
          <UserMessage content="Duis consequat pretium libero sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dapibus sagittis. Fusce pellentesque a libero at ultricies. In hac habitasse platea dictumst." />
        </div>
        <MessageInput />
      </div>
    );
  }
}

export default App;
