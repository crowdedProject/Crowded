import {FETCH_JOIN, DELETE_FAVORITE, UPDATE_DATA, ADD_FAVORITE} from '../actions/cafe-db';

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
  favoriteList: [],
  addFavorite: []
};

export default function(state=initState, action) {
  switch (action.type) {
    case DELETE_FAVORITE:
      return {...state, favoriteList: action.payload.data};
    case FETCH_JOIN:
      let cafeArray = action.payload.data[0].caves;
      return {...state, favoriteList: cafeArray};
    case UPDATE_DATA:
      return {...state, favoriteList: action.payload.data};
    case ADD_FAVORITE:
      return {...state, addFavorite: action.payload.data};
  }
  return state;
}