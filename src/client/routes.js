import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PrefList from './containers/pref-list';
import CafeList from './containers/cafe-list';
import UserLogin from './components/user-login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PrefList} />
    <Route path="/login" component={UserLogin} />
    <Route path="/cafes" component={CafeList} />
  </Route>
);