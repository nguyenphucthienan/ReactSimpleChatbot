import React, { Component } from 'react';
import { connect } from 'react-redux';

class BotMessage extends Component {
  render() {
    const { username, avatar } = this.props.botInfo;

    return (
      <div className="col s10 offset-s1">
        <div className="card horizontal">
          <div className="user-info card-image valign-wrapper">
            <img className="avatar" src={avatar} />
            <p className="center-align">{username}</p>
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
