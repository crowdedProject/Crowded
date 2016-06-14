import React, {Component} from 'react';
import _ from 'lodash';

import SearchBar from '../containers/search-bar';
import List from '../containers/list';
import userLoginAuth0 from './userLogin_Auth0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cafes: []
    };
  }

  // componentWillMount() {
  //   this.cafeSearch('thisisadummycoffeeshop');
  // }

  cafeSearch(term) {
    console.log(term)
    //post to server at endpoint that server recognizes

    //receive cafe data from server

  }

  render() {
    //should debounce yelp api call
    const cafeSearch = _.debounce((term) => {
      this.cafeSearch(term);
    }, 300);

    return (
      <div>
        <div>
          <SearchBar onSearchTermChange={cafeSearch} />
        </div>
        <div>
          <List />
          <userLoginAuth0 />
        </div>
      </div>
    );
  }
}

export default App;
