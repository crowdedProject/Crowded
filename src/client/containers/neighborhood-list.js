import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNeighborhood} from '../actions/index';
import {Link, browserHistory} from 'react-router';
import {fetchCafeListByGeoloc} from '../actions/cafe-api';

class NeighborhoodList extends Component {
  constructor (props)  {
    super(props);
    this.onNeigbhorhoodClick = this.onNeigbhorhoodClick.bind(this);
    this.onPrefSubmit = this.onPrefSubmit.bind(this);
    this.onHoodSubmit = this.onHoodSubmit.bind(this);
    // this.onNeighborhoodChange = this.onNeighborhoodChange.bind(this);
  }

  onNeigbhorhoodClick(event) {
    // need logic here or in the div to change the color
    //logic for preventing double clicking and for removing pref from list by clicking should be in the action handler
    this.props.setNeighborhood(event.target.value);
    //this.setState = event.target
  }
  
  onPrefSubmit(props) {
    
    //start by using: this.props.yelpRating(props)
    //eventually we want this to be this.props.submitPrefList to handle all preferences, but for MvP we can test with just a yelp call
    // .then(() => {
      browserHistory.push('/') //change the route to render the cafe list
    // });
    
    //call cafe-api actions and pass in only the relevant state items
  }
  
  onHoodSubmit(event) {
    this.props.fetchCafeListByGeoloc(event.target.value);
    browserHistory.push('/cafes');
  }
  
  // onNeighborhoodChange(props) {
  //   browserHistory.push('/neighborhood')
  // }
  
  render() { 
    return (
      <div>
        <div className="search-button">
          <button type="submit" className="mdl-button--raised main" onClick={this.onPrefSubmit}>Back to Prefs</button>
        </div>
        
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col" value='37.759481,-122.414968' onClick={this.onHoodSubmit}>
            Mission
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='37.762462, -122.434905' onClick={this.onHoodSubmit}>
            Castro
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='s37.750581, -122.486192' onClick={this.onHoodSubmit}>
            Sunset
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='37.778871, -122.478834' onClick={this.onHoodSubmit}>
            Richmond
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='37.803224, -122.437432' onClick={this.onHoodSubmit}>
            Marina
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='37.804101, -122.408153' onClick={this.onHoodSubmit}>
            North Beach
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='37.770061, -122.444712' onClick={this.onHoodSubmit}>
            Haight
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='37.778915, -122.398127' onClick={this.onHoodSubmit}>
            FiDi / Soma
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='37.751860, -122.450125' onClick={this.onHoodSubmit}>
            Twin Peaks
          </div>
        </div>
      </div>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchCafeListByGeoloc, setNeighborhood}, dispatch);
}

export default connect(null, mapDispachToProps)(NeighborhoodList);