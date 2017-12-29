import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/styles.css';

class App extends Component {
  render() {
    return (
      <div>Hi there!</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
