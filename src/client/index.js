import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes/routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));