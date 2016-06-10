import React, {Component} from 'react';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input type="text" placeHolder="Hello World!" />
      </div>
    );
  }
}