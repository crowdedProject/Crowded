import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSeat} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';

class CafeList extends Component {
  constructor (props) {
    super(props);
    // this.state = {term: ''};
    this.renderCafe = this.renderCafe.bind(this);
    this.columnHead = this.columnHead.bind(this);
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
   let seat = this.fetchCafeData(id);
   
   return (
     <tr key={id}>
       <td>{name}</td>
       <td>{rating}</td>
       <td>{price}</td>
       <td>{seat}</td> 
     </tr>
   );
 }
//  let colHeaders = _.filter(this.props.pref, (item) => {
//      return (item === true)
//    });
   
 columnHead() {
   console.log(this.props.pref)
   return _.map(this.props.pref, function(item, key) {
     if (item === true) {
       if (key !== 'proximity') {
         return `<th>${key}</th>`;
       }
     }
   })
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
    pref: state.pref
  })
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchSeat}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(CafeList);