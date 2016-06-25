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
class CafeList extends Component {
  constructor (props) {
    super(props);
    this.renderCafe = this.renderCafe.bind(this);
    // this.props.fetchData = this.props.fetchData.bind(this);
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
            <p>rating</p>
            {rating}
          </div>
          <div className="map-div">
            <GoogleMap lon={lon} lat={lat} title={name}/>
          </div> 
        </AccordionItem>
    );
 }

  render() {
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    cafe: state.cafe,
    pref: state.pref.pref,
    email: state.login.profile.email
  })
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchData, updateData, addFavorite}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(CafeList);

