import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import Cafe from '../components/cafe';

export default class CafeList extends Component {
  //should get render cafe infor from the cafe-list-reducer state
 renderCafe(cafeData) {
    const name = "datafromCafeData.name"
    const yelpRating = "datafromCafeData.yelp"
    const pressures = "datafromCafeData.seats"

    return (
      //{name}, {seats}, etc should come from the state that has these
      <tr key={name}>
        <td><CafeField data={seats} /></td>
      </tr>
    );
  }
  
  render() {
    //will want to render the cafe-list-reducer here (which holds the state)
    //not sure whether cafe should be a container (state aware), but right now it's a component and that could change. But ultimate, we want to render a cafe for each element of state
      //previous code had it done via this: {this.state.cafeArr}
    return (
      <table className="mdl-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th>Yelp Rating</th>
            <th>StatedPref 1</th>
            <th>StatedPref 1</th>
            <th>StatedPref 1</th>
          </tr>
        </thead>
        <tbody>
          Data from cafe api and db calls
        </tbody>
      </table>
    );
  }
};

function mapStateToProps({cafeReducer}) {
  return {cafeReducer};
}

export default connect(mapStateToProps)(CafeList);