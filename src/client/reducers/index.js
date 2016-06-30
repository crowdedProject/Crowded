import {createStore, combineReducers, applyMiddleware} from 'redux';
import PrefReducer from './pref-reducer';
import CafeReducer from './cafe-list-reducer';
import FavoriteReducer from './favorite-reducer';
import LoginReducer from './login-reducer';
import createLogger from 'redux-logger';
import {reducer as formReducer} from 'redux-form';

const logger = createLogger();

const rootReducer = combineReducers({
  pref: PrefReducer,
  cafe: CafeReducer,
  favorite: FavoriteReducer,
  login: LoginReducer,
  form: formReducer
});

const StoreHolder = createStore(rootReducer, {}, applyMiddleware(logger));

export default rootReducer;