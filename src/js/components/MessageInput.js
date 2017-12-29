import React, { Component } from 'react';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({ value: event.target.value });
  }

  handleTextSubmit(event) {
    console.log(this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      <div className="row center-align">
        <form className="col s10 offset-s1" onSubmit={this.handleTextSubmit}>
          <div className="input-field col s8">
            <textarea className="materialize-textarea" value={this.state.value} onChange={this.handleTextChange}></textarea>
          </div>
          <button type="submit" className="waves-effect waves-light blue btn"><i className="material-icons left">send</i>SEND</button>
        </form>
      </div>
    );
  }
}

export default MessageInput;
