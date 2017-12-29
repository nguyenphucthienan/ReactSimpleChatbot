import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../css/styles.css';
import reducers from './reducers';

const store = createStore(reducers, {});

class App extends Component {
  render() {
    return (
      <div>Hi there!</div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
