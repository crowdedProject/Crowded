import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

export default class LoginRedirect extends Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
  }
  submitLogin () {
    browserHistory.push('/login');
  }
  submitReturn () {
    browserHistory.push('/cafes')
  }

  render() {
    return (
      <div>
        <div className="div-holder-cafe">
          <div className="favorite-headers">Please sign in to see favorites!</div>
          <div className="search-button-neighborhood">
              <button type="submit" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" onClick={this.submitLogin}>Login</button>
          </div>
          <div className="search-button-neighborhood">
              <button type="submit" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" onClick={this.submitReturn}>Back to Results</button>
          </div>
        </div>
      </div>
    );
  }
}