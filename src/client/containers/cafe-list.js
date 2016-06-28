import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData, addFavorite} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';
import {Accordion, AccordionItem} from 'react-sanfona';
import {CafeField} from '../components/cafe-field';
import AccordionData from '../components/accordion';
import GoogleMap from '../components/googleCafeMap';
import EventListener from 'react-event-listener';
import {fetchCafeListByGeoloc} from '../actions/cafe-api';
import {fetchCoordinates} from '../actions/index';
class CafeList extends Component {
  constructor (props) {
    super(props);
    this.renderCafe = this.renderCafe.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
		this.getCoords = this.getCoords.bind(this);
  }

  fetchCafeData(cafeId) {
    this.props.fetchData(cafeId);
  }

  addToFavorite(userEmail, cafeId) {
    this.props.addFavorite(userEmail, cafeId);
  }

  updateCafeData(cafeId, columnHeader, newValue) {
    this.props.updateData(cafeId, columnHeader, newValue);
  }
  
  renderCafe(cafeData) {
    console.log('rendercafe called');
    let searchPref = this.props.pref;

    let referenceObj = {
      proximity: 'Prox.',
      neighborhood: 'Neighborhood',
      coffeeQuality: 'Coffee',
      ambiance: 'Ambiance',
      rating: 'Rating',
      seats: 'Seats',
      outlets: 'Outlets',
      bathroomQuality: 'Bathrooms',
      line: 'Line',
      noise: 'Noise',
      price: 'Price'
   };

    let cafeId = cafeData[0].place_id;
    let name = cafeData[0].name;
    let rating = cafeData[0].rating;
    let price = cafeData[0].price_level;
    let seat = cafeData[0].curr_seat;
    let lon = Number(cafeData[0].coordLng);
    let lat = Number(cafeData[0].coordLat);

    return (
        <AccordionItem title={cafeData[0].name} key={cafeData[0].place_id}>
          <div>
            <div className="expand-holder">
              <AccordionData 
                cafeData={cafeData} 
                searchPref={searchPref}
                referenceObj={referenceObj} />
            </div>
            <button>Check-In & Update Data</button>
            <button onclick={this.addToFavorite(this.props.email, event.target.value)} value={cafeData[0].cafeId}>Add to favorites</button>
            <button>Add cafe to favorites</button>
          </div>
          <div className="map-div">
            <GoogleMap lon={lon} lat={lat} title={name}/>
          </div> 
        </AccordionItem>
    );
 }

  getCoords() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.fetchCoordinates(position);
      });
    } else {
      console.log("Sorry your browser has not yet supporting Geo Location");
    }
  }

  componentDidMount() {
    this.getCoords();
  }

  handleRefresh() {
    if(this.props.term === false) {
      setTimeout(this.handleRefresh, 200);
		} else {
      this.props.fetchCafeListByGeoloc(this.props.term);
    } 
  };

  render() {
    console.log('re rendered');
    return (
      <div>
        <div className="div-holder">
          <div className="button-holder">
            <button type="submit " className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="button-image" src="src/client/assets/mdl-icons/undo.svg" onClick={() => browserHistory.push('/favorite')}>Favorites</button>
          </div>
          <div className="button-holder">
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={() => browserHistory.push('/')}>Reset Preferences</button>
          </div>
        </div>
        <div className='cafe-list-holder'>
          <Accordion>
            {this.props.cafe.cafeList.map(this.renderCafe)}
          </Accordion>
        </div>
          <EventListener target={window} onload={this.handleRefresh} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
		term: state.pref.term,
    cafe: state.cafe,
    pref: state.pref.pref,
    email: state.login.profile.email
  })
}

function mapDispachToProps(dispatch) {
<<<<<<< 447dc1ad811996042f4aedcd0dd038943c43a520
  return bindActionCreators({fetchData, updateData, addFavorite}, dispatch);
=======
  return bindActionCreators({fetchCafeListByGeoloc, fetchData, updateData, fetchCoordinates}, dispatch);
>>>>>>> [fix] fix content on browser refresh
}

export default connect(mapStateToProps, mapDispachToProps)(CafeList);

