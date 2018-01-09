import React, { Component } from 'react';

class BotCard extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log(this.props.botInfo.username);
  }

  render() {
    const { username, avatar } = this.props.botInfo;

    return (
      <div className="col s12" onClick={this.handleOnClick}>
        <div className="card horizontal z-depth-2">
          <div className="card-image valign-wrapper">
            <img className="bot-card-avatar" src={avatar} alt="avatar" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p className="center-align">{username}</p>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default BotCard;
