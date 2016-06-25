import {FETCH_DATA, UPDATE_DATA, DELETE_FAVORITE} from '../actions/cafe-db';

var initState = {
  userEmail: '',
  savedPrefList: {
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
  favoriteList: [{name: 'test', rating: 5, place_id: 1}, {name: 'test2', rating: 1, place_id: 2}]
};

export default function(state=initState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, favoriteList: action.payload.data};
    case UPDATE_DATA:
      return {...state, favoriteList: action.payload.data};
    case DELETE_FAVORITE:
      return {...state, favoriteList: action.payload.data};
  }
  return state;
}