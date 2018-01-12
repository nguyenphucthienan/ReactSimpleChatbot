import React, { Component } from 'react';
import { connect } from 'react-redux';

class BotMessage extends Component {
  // constructor() {
  //   super();
  //   this.scrollToBottom = this.scrollToBottom.bind(this);
  // }

  // scrollToBottom(messageId) {
  //   this.refs[messageId].scrollIntoView({ behavior: 'smooth' });
  // }

  // componentDidMount() {
  //   this.scrollToBottom(this.props.messageId);
  // }

  render() {
    const { username, avatar } = this.props.botInfo;

    return (
      <div className="col s12" ref={this.props.messageId}>
        <div className="card horizontal z-depth-2">
          <div className="card-info">
            <img className="message-card-avatar" src={avatar} alt="avatar" />
            <p className="message-card-username center-align">{username}</p>
          </div>
          <div className="card-stacked">
            <div className="card-content left-align">
              <p>{this.props.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ botInfo }) {
  return { botInfo };
}

export default connect(mapStateToProps)(BotMessage);
