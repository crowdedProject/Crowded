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
      <div className="headerComponent">
        <div>
          <button type="submit" className="headerBtn" onClick={this.onLogInSubmit}>My Profile</button>
        </div>
        <div>
          <button type="submit" className="headerBtn" onClick={this.onAboutSubmit}>About</button>
        </div>
      </div>
    );
  }
} 