import React, {Component} from 'react';
import Axios from 'axios';
import Cafe from './cafe';

class CafeList extends Component {

  constructor(props) {
    super(props);
    this.state = { cafeArr: null };
    this.cafeListFetch('sunset');
  }

  cafeListFetch = (term) => {
    Axios.post('/cafeResult', term)
      .then(response => {
        let sortedResp = response.data.businesses.sort((cafe1, cafe2) => {
          return cafe2.rating - cafe1.rating;
        });
        let cafeArr = sortedResp.map((cafe) => {
          return (
            <Cafe
              key={cafe.name}
              cafe={cafe} />
          );
        });
        this.setState({ cafeArr: cafeArr });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // Render the state
  render() {
    return (
      <ul>
        {this.state.cafeArr}
      </ul>
    );
  }
};

export default CafeList;