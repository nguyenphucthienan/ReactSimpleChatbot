import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage, clearMessages } from '../actions';

class MessageInput extends Component {
  constructor(props) {
    super(props);
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
      this.props.addMessage(false, this.state.value);
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
      <a className="clear-button waves-effect waves-light red btn" onClick={this.handleClearButton}>
        <i className="material-icons left">remove</i>CLEAR
      </a>
    );
  }

  render() {
    return (
      <div className="row center-align">
        <form className="col s12" onSubmit={this.handleTextSubmit}>
          <div className="input-field">
            <input className="materialize-textarea" value={this.state.value} onChange={this.handleTextChange}></input>
          </div>
          <button type="submit" className="waves-effect waves-light blue btn"><i className="material-icons left">send</i>SEND</button>
          {this.renderClearButton()}
        </form>
      </div>
    );
  }
}

export default connect(null, { addMessage, clearMessages })(MessageInput);
