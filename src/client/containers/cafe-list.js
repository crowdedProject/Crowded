import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import Cafe from '../components/cafe';

class CafeList extends Component {
  //should get render cafe infor from the cafe-list-reducer state
  // constructor (props) {
  //   super(props);
  // }
 renderCafe(cafeData) {
   //this works for one item
   return _.map(cafeData, function(cafe) {
      console.log('this is cafe data', cafe);
      let id = cafe.place_id;
      let name = cafe.name;
      let rating = cafe.rating;
      let price = cafe.price_level;

     return (
       <tr key={id}>
         <td>{name}</td>
         <td>{rating}</td>
         <td>{price}</td>
       </tr>
     );
   });
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
              </tr>
            </thead>
            <tbody>
              {this.props.cafe.map(this.renderCafe)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

function mapStateToProps({cafe}) {
  return {cafe};
}

export default connect(mapStateToProps)(CafeList);