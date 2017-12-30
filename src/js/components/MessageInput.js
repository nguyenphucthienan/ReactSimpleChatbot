import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage, clearMessages } from '../actions';
import { convertString } from './utils';

class MessageInput extends Component {
  constructor() {
    super();
    this.state = { value: '' };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this);
    this.renderClearButton = this.renderClearButton.bind(this);
  }

  handleTextChange(event) {
    this.setState({ value: event.target.value });
  }

  handleTextSubmit(event) {
    if (this.state.value) {
      // Add user message
      let messageId = `USER${new Date().getTime()}`;
      this.props.addMessage(messageId, false, this.state.value);

      // Add bot message
      const { botInfo } = this.props;
      const botMessage = convertString(botInfo.username, this.state.value);
      messageId = `BOT${new Date().getTime()}`;
      this.props.addMessage(messageId, true, botMessage);

      // Reset text input
      this.setState({ value: '' });
    }

    event.preventDefault();
  }

  handleClearButton() {
    this.props.clearMessages();
    event.preventDefault();
  }

  renderClearButton() {
    return (
      <a className="clear-button waves-effect waves-light red btn" onClick={this.handleClearButton} >
        <i className="material-icons left">remove</i>CLEAR
      </a>
    );
  }

  render() {
    return (
      <div className="row center-align">
        <form className="col s12" onSubmit={this.handleTextSubmit}>
          <div className="input-field">
            <input className="materialize-textarea" value={this.state.value} onChange={this.handleTextChange} />
          </div>
          <button type="submit" className="waves-effect waves-light blue btn"><i className="material-icons left">send</i>SEND</button>
          {this.renderClearButton()}
        </form>
      </div>
    );
  }
}

function mapStateToProps({ botInfo }) {
  return { botInfo };
}

export default connect(mapStateToProps, { addMessage, clearMessages })(MessageInput);
