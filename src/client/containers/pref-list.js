import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {reduxForm} from 'redux-form'; //delete if remove the form
import {yelpRating} from '../actions/index';
import {setPreferences} from '../actions/index';
import {Link, browserHistory} from 'react-router';


class PrefList extends Component {
  constructor (props)  {
    super(props);
    
    //this.state = {
      //neighborhood: false,
      //...
    // }
    
    this.onPrefClick = this.onPrefClick.bind(this);
    this.onPrefSubmit = this.onPrefSubmit.bind(this);
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
      browserHistory.push('/cafes') //change the route to render the cafe list
    // });
    
    //call cafe-api actions and pass in only the relevant state items
  }
  
  render() {
    
    return (
      <div>
        <span>
          <button type="submit" className="mdl-button--raised" onClick={this.onPrefSubmit}>Submit</button>
        </span>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col" value='neighborhood' onClick={this.onPrefClick}>
            Neighborhood
          </div>
          <div className="mdl-cell mdl-cell--4-col" value='proximity' onClick={this.onPrefClick}>
            Proximity
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
  return bindActionCreators({yelpRating, setPreferences}, dispatch);
}

export default connect(null, mapDispachToProps)(PrefList);