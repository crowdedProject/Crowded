import {FETCH_CAFELIST} from '../actions/cafe-api';
import {FETCH_DATA, UPDATE_DATA} from '../actions/cafe-db';
import {USER_PREFS} from '../actions/index';
import {NEIGHBORHOOD_PREFS} from '../actions/index';

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
};

export default function(state=initState, action) {
  switch (action.type) {
    case FETCH_CAFELIST:
      console.log(action.payload);
      return {...state, cafeList: action.payload.data};
      // return [action.payload.data, ...state];
    case FETCH_DATA:
      console.log('this is payload', action.payload.data)
      return {...state, dbCafeList: action.payload.data};
    // case UPDATE_DATA:
    //   action.payload.data)
    //   return {...state, cafeDbList: action.payload.data};
  }
  return state;
}
