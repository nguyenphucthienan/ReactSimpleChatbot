import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserMessage extends Component {
  render() {
    const { username, avatar } = this.props.userInfo;

    return (
      <div className="col s10 offset-s1">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <p>{this.props.content}</p>
            </div>
          </div>
          <div className="user-info card-image valign-wrapper">
            <img className="avatar" src={avatar} />
            <p className="center-align">{username}</p>
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
