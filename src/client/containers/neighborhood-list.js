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
    this.onHoodSubmit = this.onHoodSubmit.bind(this);  }

  onNeigbhorhoodClick(event) {
    this.props.setNeighborhood(event.target.value);
    let flag = this.props.pref.pref[event.target.value];
    if (flag)  {
      event.target.className = 'mdl-cell mdl-cell--4-col clicked';
      flag === false;
    } else {
      event.target.className = 'mdl-cell mdl-cell--4-col unclicked';
      flag === true;
    }
  }
  
  onPrefSubmit(props) {
      browserHistory.push('/')
  }
  
  onHoodSubmit(event) {
    this.props.fetchCafeListByGeoloc(event.target.value);
    browserHistory.push('/cafes');
  }
 
  render() { 
    return (
      <div>
      <div className="search-button">
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.onPrefSubmit}>Back to Prefs</button>
          </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.759481,-122.414968' onClick={this.onHoodSubmit}>
            Mission
          </div>
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.762462, -122.434905' onClick={this.onHoodSubmit}>
            Castro
          </div>
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.750581, -122.486192' onClick={this.onHoodSubmit}>
            Sunset
          </div>
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.778871, -122.478834' onClick={this.onHoodSubmit}>
            Richmond
          </div>
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.803224, -122.437432' onClick={this.onHoodSubmit}>
            Marina
          </div>
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.804101, -122.408153' onClick={this.onHoodSubmit}>
            North Beach
          </div>
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.770061, -122.444712' onClick={this.onHoodSubmit}>
            Haight
          </div>
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.778915, -122.398127' onClick={this.onHoodSubmit}>
            FiDi / Soma
          </div>
          <div className="mdl-cell mdl-cell--4-col unclicked" value='37.751860, -122.450125' onClick={this.onHoodSubmit}>
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