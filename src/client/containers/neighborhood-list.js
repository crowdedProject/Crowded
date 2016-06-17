import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNeighborhood} from '../actions/index';
import {Link, browserHistory} from 'react-router';

class NeighborhoodList extends Component {
  constructor (props)  {
    super(props);
    this.onNeigbhorhoodClick = this.onNeigbhorhoodClick.bind(this);
    this.onPrefSubmit = this.onPrefSubmit.bind(this);
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
          <div className="mdl-cell mdl-cell--4-col" value='mission' onClick={this.onNeigbhorhoodClick}>
            Mission
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='castro' onClick={this.onNeigbhorhoodClick}>
            Castro
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='sunset' onClick={this.onNeigbhorhoodClick}>
            Sunset
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='richmond' onClick={this.onNeigbhorhoodClick}>
            Richmond
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='marina' onClick={this.onNeigbhorhoodClick}>
            Marina
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='northBeach' onClick={this.onNeigbhorhoodClick}>
            North Beach
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='haight' onClick={this.onNeigbhorhoodClick}>
            Haight
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='soma' onClick={this.onNeigbhorhoodClick}>
            FiDi / Soma
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='twinPeaks' onClick={this.onNeigbhorhoodClick}>
            Twin Peaks
          </div>
        </div>
      </div>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({setNeighborhood}, dispatch);
}

export default connect(null, mapDispachToProps)(NeighborhoodList);