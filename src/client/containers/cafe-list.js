import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';
import {Accordion, AccordionItem} from 'react-sanfona';

class CafeList extends Component {
  constructor (props) {
    super(props);
    this.renderCafe = this.renderCafe.bind(this);
    // this.props.fetchData = this.props.fetchData.bind(this);
  }

  fetchCafeData(cafeId) {
    this.props.fetchData(cafeId);
  }

  updateCafeData(cafeId, columnHeader, newValue) {
    this.props.updateData(cafeId, columnHeader, newValue);
  }
  
  renderCafe(cafeData) {
    console.log('testing data', cafeData);
    console.log('preference props', this.props.pref);
    let searchPref = this.props.pref;

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

    for (let i=0; i<searchPref.length; i++) {
      if (searchPref[i] === true) {
        //create 
        //<div>
          //<p> referenceObj[searchPref[i]]</p?
          //cafeData[0][searchPref[i]]
        //</div>
        //push to array?
    //take array and concat and insert below
      }
    }
    let cafeId = cafeData[0].place_id;
    let name = cafeData[0].name;
    let rating = cafeData[0].rating;
    let price = cafeData[0].price_level;
    let seat = cafeData[0].curr_seat;

    return (
        <AccordionItem title={name} key={cafeId}>
          <div>Checkin to Update data</div>
          <div>Add cafe to favorites</div>
          <div>
            <p>rating</p>
            {rating}
            //arrayOfPrerenceDivsCreatedAbove
          </div>
        </AccordionItem>
    );
 }

  render() {
    return (
      <div className='cafe-list-holder'>
        <Accordion>
          {this.props.cafe.cafeList.map(this.renderCafe)}
        </Accordion>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    cafe: state.cafe,
    pref: state.pref.pref
  })
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchData, updateData}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(CafeList);

