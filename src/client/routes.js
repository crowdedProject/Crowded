import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PrefList from './containers/pref-list';
import CafeList from './containers/cafe-list';
import NeighborhoodList from './containers/neighborhood-list';
import Auth0UserLogin from './containers/auth0_userLogin';
import FavoriteList from './containers/favorite-list';
import PrefUpdate from './components/prefUpdate';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PrefList} />
    <Route path="/neighborhood" component={NeighborhoodList} />
    <Route path="/login" component={Auth0UserLogin} />
    <Route path="/cafes" component={CafeList} />
    <Route path="/favorite" component={FavoriteList} />
    <Route path="/loggedIn" component={PrefList} />
    <Route path="/updatepref" component={PrefUpdate} />
  </Route>
);