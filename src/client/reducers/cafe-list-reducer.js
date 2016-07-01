import {FETCH_CAFELIST} from '../actions/cafe-api';
import {FETCH_DATA, UPDATE_DATA} from '../actions/cafe-db';
import {USER_PREFS} from '../actions/index';
import {NEIGHBORHOOD_PREFS} from '../actions/index';
import {FETCH_COORD} from '../actions/index';
import {PULL_CAFE} from '../actions/index';

var initState = {
  prefList: 
    { 
      proximity: false,
      neighborhood: false,
      coffeeQuality: false,
      ambiance: false,
      rating: true,
      seats: true,
      outlets: false,
      bathroomQuality: false,
      line: false,
      noise: false,
      price: false
    },
  neighborhoodPref: 
  {
    mission: false,
    castro: false,
    sunset: false,
    richmond: false,
    marina: false,
    northBeach: false,
    haight: false,
    soma: false,
    twinPeaks: false
  },
  cafeList: [],
  cafeUpdated: {}
};

export default function(state=initState, action) {
  switch (action.type) {
    case FETCH_CAFELIST:
      return {...state, cafeList: action.payload.data};
      // return [action.payload.data, ...state];
    case FETCH_DATA:
      return {...state, dbCafeList: action.payload.data};
    case PULL_CAFE:
      return {...state, cafeUpdated: action.payload};
  }
  return state;
}
