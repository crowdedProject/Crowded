import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData, addFavorite} from '../actions/cafe-db';
import {pullCafeForForm} from '../actions/index';
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
    this.addToFavorite = this.addToFavorite.bind(this);
    this.fetchCafeData = this.fetchCafeData.bind(this);
    this.updateCafeData = this.updateCafeData.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  signInAlert() {
    console.log('please signIn');
  }

  fetchCafeData(cafeId) {
    this.props.fetchData(cafeId);
  }

  addToFavorite(cafeId) {
    let userEmail = 'behrens.adam@gmail.com';
    // let userEmail = this.props.profile.email;
    // if(!userEmail) {
    //   this.signInAlert();
    // } else {
    this.props.addFavorite(userEmail, cafeId);
    // }
  }

  updateCafeData(cafeId, columnHeader, newValue) {
    this.props.updateData(cafeId, columnHeader, newValue);
  }

  onUpdate(cafeInfo) {
    this.props.pullCafeForForm(cafeInfo);
    browserHistory.push('/updatepref');
  }
  
  renderCafe(cafeData) {
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
            <button onClick={() => {
              this.addToFavorite(cafeData[0].place_id)
              }
            }>Add to favorites</button>
            <button onClick={() => {this.onUpdate(cafeData[0])}}>Check-In & Update Data</button>
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
    profile: state.login.profile
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCafeListByGeoloc, fetchData, updateData, fetchCoordinates, pullCafeForForm, addFavorite}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CafeList);



