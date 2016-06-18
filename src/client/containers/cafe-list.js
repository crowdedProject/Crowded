import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSeat} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';

class CafeList extends Component {
  constructor (props) {
    super(props);
    
    this.renderCafe = this.renderCafe.bind(this)
    // this.props.fetchSeat = this.props.fetchSeat.bind(this);
  }
  
  fetchCafeData(cafeId) {
    this.props.fetchSeat(cafeId);
  }
  
 renderCafe(cafeData) {
   //this works for one item
   let id = cafeData.place_id;
   let name = cafeData.name;
   let rating = cafeData.rating;
   let price = cafeData.price_level;
    
    
   return (
     <tr key={id}>
       <td>{name}</td>
       <td>{rating}</td>
       <td>{price}</td>
       <td>5 seats</td> 
     </tr>
   );
 }
  
  render() {
    //eventually make column headers dynamic
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
                <th>Seats</th>
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
    cafe: state.cafe
  })
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchSeat}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(CafeList);