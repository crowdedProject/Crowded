import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.onLogInSubmit = this.onLogInSubmit.bind(this);
    this.onAboutSubmit - this.onAboutSubmit.bind(this);
  }

  onLogInSubmit() {
    browserHistory.push('/login');
  }

  onAboutSubmit() {
    browserHistory.push('/about');
  }

  render() {
    return(
      <div className="div-holder-big">
      <div className="header-component">
        <h1>CrowdedCafe </h1>
        <div className="button-holder">
          <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={this.onLogInSubmit}>My Profile</button>
        </div>
        <div className="button-holder">
          <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={this.onAboutSubmit}>About</button>
        </div>
      </div>
      </div>
    );
  }
} 