import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserMessage extends Component {
  constructor() {
    super();
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom(ref) {
    this.refs[ref].scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.scrollToBottom(this.props.messageId);
  }

  render() {
    const { username, avatar } = this.props.userInfo;

    return (
      <div className="col s12" ref={this.props.messageId}>
        <div className="card horizontal z-depth-2">
          <div className="card-stacked">
            <div className="card-content right-align">
              <p>{this.props.content}</p>
            </div>
          </div>
          <div className="card-info">
            <img className="message-card-avatar" src={avatar} alt="avatar" />
            <p className="message-card-username center-align">{username}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ userInfo }) {
  return { userInfo };
}

export default connect(mapStateToProps)(UserMessage);
