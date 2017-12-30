import React, { Component } from 'react';

class Header extends Component {
  renderHeader() {
    return [
      <li key="1"><a>lowercase</a></li>,
      <li key="2"><a>UPPERCASE</a></li>,
      <li key="3"><a>CapitalizedCase</a></li>,
    ];
  }

  renderSideNav() {
    return [
      <li key="1"><a>lowercase</a></li>,
      <li key="2"><a>UPPERCASE</a></li>,
      <li key="3"><a>CapitalizedCase</a></li>,
    ];
  }

  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a className="brand-logo">
                <i className="material-icons">chat</i>React Chat
              </a>

              <a data-activates="nav-mobile" className="button-collapse pointer-cursor">
                <i className="material-icons">menu</i>
              </a>

              <ul className="right hide-on-med-and-down">
                {this.renderHeader()}
              </ul>

              <ul className="side-nav" id="nav-mobile">
                {this.renderSideNav()}
              </ul>
            </div>
          </nav >
        </div>
      </header>
    );
  }
}

export default Header;
