import React, {Component} from 'react';

export default class Preloader extends Component {
  render() {
    return (
      <div className="div-holder-cafe">
        <div className="gif-holder">
          <img src={require("../assets/loading-gif-1.gif")} 
          className="photo-style"/>
        </div>
      </div>
    );
  }
}