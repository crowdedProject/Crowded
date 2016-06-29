import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData, deleteFavorite, addUserData, fetchJoin, addFavorite} from '../actions/cafe-db';
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
    console.log('this is an added favorite', this.props.addFavorite);
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
    addFavorite: state.favorite.addFavorite,
    pref: state.favorite.savedPrefList,
    profile: state.login.profile
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchData, updateData, deleteFavorite, addUserData, addFavorite, fetchJoin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);

