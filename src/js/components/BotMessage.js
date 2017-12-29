import React, { Component } from 'react';
import { connect } from 'react-redux';

class BotMessage extends Component {
  constructor() {
    super();
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom(ref) {
    this.refs[ref].scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom(this.props.sentAt);
  }

  render() {
    const { username, avatar } = this.props.botInfo;

    return (
      <div className="col s12" ref={this.props.sentAt}>
        <div className="card horizontal">
          <div className="user-info card-image">
            <img className="avatar" src={avatar} />
            <p className="username center-align">{username}</p>
          </div>
          <div className="card-stacked">
            <div className="card-content">
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
