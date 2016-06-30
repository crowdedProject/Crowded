import {FETCH_CAFELIST} from '../actions/index';
import {USER_PREFS} from '../actions/index';
import {NEIGBHORHOOD_PREFS} from '../actions/index';
import {FETCH_COORD} from '../actions/index';
import {ADD_USER} from '../actions/index';

var initState = {
  pref: {
    proximity: true,
    neighborhood: false,
    coffeeQuality: false,
    ambiance: false,
    rating: false,
    seats: false,
    outlets: false,
    bathroomQuality: false,
    line: false,
    noise: false,
    price: false
  },
  term: false,
  profile: {}
}


export default function(state=initState, action) {
  switch(action.type) {
    case USER_PREFS:
      // console.log(state);
      // return [action.payload, ...state]
      switch(action.payload) {
        case 'coffeeQuality':
          if (state.pref.coffeeQuality === true) {
            state.pref.coffeeQuality = false;
            return state;
          } else {
            state.pref.coffeeQuality = true;
            return state;
          }
        case 'ambiance':
          if (state.pref.ambiance === true) {
            state.pref.ambiance = false;
            return state;
          } else {
            state.pref.ambiance = true;
            return state;
          }
        case 'rating':
          if (state.pref.rating === true) {
            state.pref.rating = false;
            return state;
          } else {
            state.pref.rating = true;
            return state;
          }
        case 'seats':
          if (state.pref.seats === true) {
            state.pref.seats = false;
            return state;
          } else {
            state.pref.seats = true;
            return state;
          }
        case 'outlets':
          if (state.pref.outlets === true) {
            state.pref.outlets = false;
            return state;
          } else {
            state.pref.outlets = true;
            return state;
          }
        case 'bathroomQuality':
          if (state.pref.bathroomQuality === true) {
            state.pref.bathroomQuality = false;
            return state;
          } else {
            state.pref.bathroomQuality = true;
            return state;
          }
        case 'line':
          if (state.pref.line === true) {
            state.pref.line = false;
            return state;
          } else {
            state.pref.line = true;
            return state;
          }
        case 'noise':
          if (state.pref.noise === true) {
            state.pref.noise = false;
            return state;
          } else {
            state.pref.noise = true;
            return state;
          }
        case 'price':
          if (state.pref.price === true) {
            state.pref.price = false;
            return state;
          } else {
            state.pref.price = true;
            return state;
          }
        default:
          return state;
      }
      case FETCH_COORD:
          // state.term = action.payload.coords.latitude + "," action.payload.coords.longitude;
          return Object.assign({}, state, {
            term: `${action.payload.coords.latitude},${action.payload.coords.longitude}`
          });
  }
  return state;
}