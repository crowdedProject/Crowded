import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {yelpRating} from '../actions/index';
import {setPreferences} from '../actions/index';
import {setNeighborhood} from '../actions/index';
import {Link, browserHistory} from 'react-router';

class NeighborhoodList extends Component {
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
    //start by using: this.props.yelpRating(props)
    //eventually we want this to be this.props.submitPrefList to handle all preferences, but for MvP we can test with just a yelp call
    // .then(() => {
      browserHistory.push('/') //change the route to render the cafe list
    // });
    
    //call cafe-api actions and pass in only the relevant state items
  }
  
  onNeighborhoodChange(props) {
    browserHistory.push('/neighborhood')
  }
  
  render() { 
    return (
      <div>
        <span>
          <button type="submit" className="mdl-button--raised" onClick={this.onPrefSubmit}>Return to Prefs</button>
        </span>
        
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col" value='Mission' onClick={this.onPrefClick}>
            Mission
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='ambiance' onClick={this.onPrefClick}>
            Castro
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='Sunset' onClick={this.onPrefClick}>
            Sunset
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='Richmond' onClick={this.onPrefClick}>
            Richmond
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='Marina' onClick={this.onPrefClick}>
            Marina
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='North Beach' onClick={this.onPrefClick}>
            North Beach
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='Haight' onClick={this.onPrefClick}>
            Haight
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='Soma' onClick={this.onPrefClick}>
            FiDi / Soma
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='Twin Peaks' onClick={this.onPrefClick}>
            Twin Peaks
          </div>
        </div>
      </div>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({yelpRating, setPreferences, setNeighborhood}, dispatch);
}

export default connect(null, mapDispachToProps)(NeighborhoodList);