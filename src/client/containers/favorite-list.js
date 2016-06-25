import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData, deleteFavorite, addUserData} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';
import {Accordion, AccordionItem} from 'react-sanfona';

class FavoriteList extends Component {
  constructor (props) {
    super(props);
    this.renderCafe = this.renderCafe.bind(this);
    this.AUTHO_ID = 'tLn1lajyn8kZGO75cXM3vuRQlyRzrMbo';
    this.AUTHO_DOMAIN = 'crowded.auth0.com';
  }
  
  fetchCafeData(userId) {
    this.props.fetchData(userId);
  }

  updateCafeData(cafeId, columnHeader, newValue) {
    this.props.updateData(cafeId, columnHeader, newValue);
  }

  removeFromList(userId, cafeId) {
    this.props.deleteFavorite(userId, cafeId);
  }
  
  renderCafe(cafeData) {
    let savedPref = this.props.pref;

    let referenceObj = {
      proximity: 'Proximity',
      neighborhood: 'Neighborhood',
      coffeeQuality: 'Coffee Quality',
      ambiance: 'Ambiance',
      rating: 'Rating',
      seats: 'Seats',
      outlets: 'Outlets',
      bathroomQuality: 'Bathroom Quality',
      line: 'Line',
      noise: 'Noise',
      price: 'Price'
   };

    let cafeId = cafeData.place_id;
    let name = cafeData.name;
    let rating = cafeData.rating;
    let price = cafeData.price_level;
    let seat = cafeData.curr_seat;

    return (
        <AccordionItem title={name} key={cafeId}>
          <div>Checkin to Update data</div>
          <div>
            <p>rating</p>
            {rating}
          </div>
        </AccordionItem>
    );
 }

  render() {
    console.log('this is a cafe', this.props.favorite.favoriteList);
    return (
      <div>
        <div className="div-holder-no-height">
          <div className="button-holder">
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={() => browserHistory.push('/')}>Return Home</button>
          </div>
          <div className="button-holder">
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={() => browserHistory.push('/cafes')}>Search Results</button>
          </div>
        </div>
        <div className='cafe-list-holder'>
          <Accordion>
          {this.props.favorite.map(this.renderCafe)}
          </Accordion>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    favorite: state.favorite.favoriteList,
    pref: state.favorite.savedPrefList,
    login: state.login.idToken
  })
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchData, updateData, deleteFavorite, addUserData}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(FavoriteList);

