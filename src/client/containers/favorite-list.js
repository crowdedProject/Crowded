import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData, deleteFavorite, addUserData, fetchJoin, addFavorite} from '../actions/cafe-db';
import {pullCafeForForm} from '../actions/index';
import AccordionData from '../components/accordion';
import {CafeField} from '../components/cafe-field';
import OrderMenu from '../components/order-menu';
import GoogleMap from '../components/googleCafeMap';
import EventListener from 'react-event-listener';
import {fetchCafeListByGeoloc} from '../actions/cafe-api';
import {fetchCoordinates} from '../actions/index';
import {orderCafeList} from '../actions/index';
import {Link, browserHistory} from 'react-router';
import {Accordion, AccordionItem} from 'react-sanfona';

class FavoriteList extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.renderCafe = this.renderCafe.bind(this);
  }
  componentWillMount() {
    this.setState({favoriteList: this.fetchJoinData(this.props.profile.email)});
    console.log(this.props.profile);
}

  fetchJoinData(userEmail) {
    this.props.fetchJoin(userEmail);
  }

  updateCafeData(userEmail, columnHeader, newValue) {
    this.props.updateData(cafeId, columnHeader, newValue);
  }

  removeFromList(userEmail, cafeId) {
    this.props.deleteFavorite(userEmail, cafeId);
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

    let cafeId = cafeData.place_id;
    let name = cafeData.name;
    let rating = cafeData.rating;
    let price = cafeData.price_level;
    let seat = cafeData.curr_seat;
    let lon = Number(cafeData.coordLng);
    let lat = Number(cafeData.coordLat);

    return (
        <AccordionItem title={name} key={cafeId}>
          <div>
            <div className="expand-holder">
              <AccordionData 
                cafeData={cafeData} 
                searchPref={searchPref}
                referenceObj={referenceObj} />
            </div>
            <button onClick={() => {this.onUpdate(cafeData)}}>Check-In & Update Data</button>
          </div>
          <div className="map-div">
            <GoogleMap lon={lon} lat={lat} title={name}/>
          </div> 
        </AccordionItem>
    );
  }

  render() {
    return (
        <div className='cafe-list-holder'>
          <Accordion>
          {this.props.favorite.map(this.renderCafe)}
          </Accordion>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    favorite: state.favorite.favoriteList,
    addFavorite: state.favorite.addFavorite,
    pref: state.pref.pref,
    profile: state.login.profile
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchData, updateData, deleteFavorite, addUserData, addFavorite, fetchJoin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);

