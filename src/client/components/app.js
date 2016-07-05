import React, {Component} from 'react';
import _ from 'lodash';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="master-div-holder">
          {this.props.children}
        </div>
      </div>
    );
  }
}