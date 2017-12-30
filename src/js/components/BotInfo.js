import React, { Component } from 'react';
import { connect } from 'react-redux';

class BotInfo extends Component {
  render() {
    const { username: botUsername } = this.props.botInfo;

    return (
      <h5 className="blue-text text-darken-1">
        <i className="material-icons">face</i>{` ${botUsername}`}
      </h5>
    );
  }
}

function mapStateToProps({ botInfo }) {
  return { botInfo };
}

export default connect(mapStateToProps)(BotInfo);
