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
  // cafeUpdated: {
  //   address: "4 Embarcadero Center, San Francisco",
  //   cafeId: 1,
  //   coffee_quality: null,
  //   coordLat: "37.7948337",
  //   coordLng: "-122.3963465",
  //   createdAt: "2016-06-28T23:52:47.866Z",
  //   curr_seat: 3,
  //   line_length: null,
  //   name: "The Coffee Bean & Tea Leaf",
  //   neighborhood: null,
  //   noise: null,
  //   outlet: null,
  //   place_id: "ChIJERH3OmGAhYAR3HDZGgxQPEA",
  //   price: "1",
  //   rating: 4,
  //   total_seat: null,
  //   updatedAt: "2016-06-28T23:52:47.866Z"
  // }
  cafeUpdated: {}
};

export default function(state=initState, action) {
  switch (action.type) {
    case FETCH_CAFELIST:
      console.log('this is CAFELIST', action.payload);
      return {...state, cafeList: action.payload.data};
      // return [action.payload.data, ...state];
    case FETCH_DATA:
      console.log('this is DATA', action.payload.data)
      return {...state, dbCafeList: action.payload.data};
    case PULL_CAFE:
      console.log('this is PULL', action.payload);
      return {...state, cafeUpdated: action.payload};
  //   case UPDATE_DATA:
  //     action.payload.data)
  //     return {...state, cafeDbList: action.payload.data};
  }
  return state;
}
