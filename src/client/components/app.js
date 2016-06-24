import React, {Component} from 'react';
import _ from 'lodash';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}