import React, {Component} from 'react';
import _ from 'lodash';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}