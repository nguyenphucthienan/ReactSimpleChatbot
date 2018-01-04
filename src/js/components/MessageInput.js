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

  async handleTextSubmit(event) {
    event.preventDefault();

    if (this.state.value) {
      const { botInfo } = this.props;

      // Add user message
      let messageId = `USER${new Date().getTime()}`;
      await this.props.addMessage(messageId, false, botInfo.index, this.state.value);

      // Add bot message
      const botMessage = convertString(botInfo.username, this.state.value);
      messageId = `BOT${new Date().getTime()}`;
      await this.props.addMessage(messageId, true, botInfo.index, botMessage);

      // Reset text input
      this.setState({ value: '' });
    }
  }

  handleClearButton(event) {
    event.preventDefault();

    const { botInfo } = this.props;
    this.props.clearMessages(botInfo.index);
  }

  renderClearButton() {
    return (
      <a className="clear-button waves-effect waves-light red btn" onClick={this.handleClearButton}>
        <i className="material-icons left">remove</i>CLEAR
      </a>
    );
  }

  render() {
    return (
      <div className="message-input row center-align">
        <form className="col s12 m10 offset-m1 l8 offset-l2" onSubmit={this.handleTextSubmit}>
          <div className="input-field">
            <input className="materialize-textarea" value={this.state.value} onChange={this.handleTextChange} />
          </div>
          <button type="submit" className="waves-effect waves-light blue darken-1 btn"><i className="material-icons left">send</i>SEND</button>
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
