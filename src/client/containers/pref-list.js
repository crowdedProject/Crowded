import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {yelpRating} from '../actions/index';
import {setPreferences} from '../actions/index';
import {setNeighborhood} from '../actions/index';
import {Link, browserHistory} from 'react-router';

class PrefList extends Component {
  constructor (props)  {
    super(props);
    this.onPrefClick = this.onPrefClick.bind(this);
    this.onPrefSubmit = this.onPrefSubmit.bind(this);
    this.onNeighborhoodChange = this.onNeighborhoodChange.bind(this);
  }

  onPrefClick(event) {
    // need logic here or in the div to change the color
    //logic for preventing double clicking and for removing pref from list by clicking should be in the action handler
    this.props.setPreferences(event.target.value);
    //this.setState = event.target
  }
  
  onPrefSubmit(props) {
    //somehow call the action "makeYelpCall" from the action file
    //start by using: this.props.yelpRating(props)
    //eventually we want this to be this.props.submitPrefList to handle all preferences, but for MvP we can test with just a yelp call
    // .then(() => {
      browserHistory.push('/cafes') //change the route to render the cafe list
    // });
    
    //call cafe-api actions and pass in only the relevant state items
  }
  
  onNeighborhoodChange(props) {
    browserHistory.push('/neighborhood')
  }
  //need to dynamically change "location set to {state.proximity || state.neighborhood}"
  render() { 
    return (
      <div>
        <span>
          <button type="submit" className="mdl-button--raised" onClick={this.onPrefSubmit}>Submit</button>
        </span>
        <div>Location set to nearest to your location</div>
        <div>Click here to select a specific Neighborhood
          <button type="submit" className="mdl-button--raised" onClick={this.onNeighborhoodChange}>Submit</button>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col" value='coffeeQuality' onClick={this.onPrefClick}>
            Coffee Quality
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='ambiance' onClick={this.onPrefClick}>
            Ambiance (change!!)
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='yelpRating' onClick={this.onPrefClick}>
            Yelp Rating
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='seats' onClick={this.onPrefClick}>
            Seats
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='outlets' onClick={this.onPrefClick}>
            Outlets
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='bathroomQuality' onClick={this.onPrefClick}>
            Bathroom Quality
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='line' onClick={this.onPrefClick}>
            Line
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='noise' onClick={this.onPrefClick}>
            Noise
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='price' onClick={this.onPrefClick}>
            Price
          </div>
        </div>
      </div>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({yelpRating, setPreferences, setNeighborhood}, dispatch);
}

export default connect(null, mapDispachToProps)(PrefList);