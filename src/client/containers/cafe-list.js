import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';

class CafeList extends Component {
  constructor (props) {
    super(props);
    this.renderCafe = this.renderCafe.bind(this);
    this.columnHead = this.columnHead.bind(this);
    // this.props.fetchData = this.props.fetchData.bind(this);
  }

  fetchCafeData(cafeId) {
    this.props.fetchData(cafeId);
  }

  updateCafeData(cafeId, columnHeader, newValue) {
    this.props.updateData(cafeId, columnHeader, newValue);
  }
  
  renderCafe(cafeData) {
   //this works for one item
   let id = cafeData.place_id;
   let name = cafeData.name;
   let rating = cafeData.rating;
   let price = cafeData.price_level;
   let seat = this.fetchCafeData(id);
   
   return (
     <tr key={id}>
       <td key={name}>{name}</td>
       <td key={rating}>{rating}</td>
       <td key={price}>{price}</td>
       <td key={seat}>{seat}</td> 
     </tr>
   );
 }
   
 columnHead() {
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
   return _.map(this.props.pref, function(item, key) {
     if (item === true) {
       if (key !== 'proximity') {
         return <th key={key}>{referenceObj[key]}</th>;
       }
     }
   })
 }
  
  render() {
    return (
      <div>
        <div className="div-holder-two">
          <div className="cafe-header">Top Cafes</div>
        </div>
        <div className="cafe-list-holder">
          <table className="mdl-data-table mdl-shadow--2dp">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Price</th>
                {this.columnHead()}
              </tr>
            </thead>
            <tbody>
              {this.props.cafe.cafeList.map(this.renderCafe)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

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

