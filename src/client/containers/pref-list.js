import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCafeListByGeoloc} from '../actions/cafe-api';
import {setNeighborhood, setPreferences, fetchCoordinates} from '../actions/index';
import {Link, browserHistory} from 'react-router';

class PrefList extends Component {
  constructor (props)  {
    super(props);
    this.onPrefClick = this.onPrefClick.bind(this);
    this.onPrefSubmit = this.onPrefSubmit.bind(this);
    this.onNeighborhoodChange = this.onNeighborhoodChange.bind(this);
    this.getCoords = this.getCoords.bind(this);
  }

  onPrefClick(event) {
    this.props.setPreferences(event.target.value);
    let flag = this.props.pref.pref[event.target.value];
    if (flag)  {
      event.target.className = 'mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone clicked';
      flag === false;
    } else {
      event.target.className = 'mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked';
      flag === true;
    }
  }
  getCoords() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.fetchCoordinates(position);
      });
    } else {
      console.log("Sorry your browser is not supporting Geo Location");
    }
  }
  componentDidMount() {
    this.getCoords();
  }
  onPrefSubmit() { 
    if(this.props.term === false) {
      setTimeout(this.onPrefSubmit, 200);
    } else {
      this.props.fetchCafeListByGeoloc(this.props.term);
      browserHistory.push('/cafes')
    }    
  }
  onNeighborhoodChange(props) {
    browserHistory.push('/neighborhood')
  }

  render() { 
    let cardClass = 'mdl-cell mdl-cell--4-col unclicked';
    return (
      <div className="PrefList">
        <div className="div-holder">
          <div className="small-print">Location set closest to you</div>
          <div className="small-print-button">
            <button type="submit" className="mdl-button mdl-button--raised mdl-button--accent mdl-js-button mdl-js-ripple-effect" onClick={this.onNeighborhoodChange}>Choose Neighborhood</button>
          </div>
          <div className="search-button">
            <button type="submit" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" onClick={this.onPrefSubmit}>Find Cafes</button>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='coffeeQuality' onClick={this.onPrefClick}>
            Coffee
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='ambiance' onClick={this.onPrefClick}>
            Ambiance
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='rating' onClick={this.onPrefClick}>
            Rating
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='seats' onClick={this.onPrefClick}>
            Seats
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='outlets' onClick={this.onPrefClick}>
            Outlets
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='bathroomQuality' onClick={this.onPrefClick}>
            Bathrooms
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='line' onClick={this.onPrefClick}>
            Line
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='noise' onClick={this.onPrefClick}>
            Noise
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone unclicked" value='price' onClick={this.onPrefClick}>
            Price
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    term: state.pref.term,
    pref: state.pref
  })
}
function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchCafeListByGeoloc, setPreferences, setNeighborhood, fetchCoordinates}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(PrefList);
