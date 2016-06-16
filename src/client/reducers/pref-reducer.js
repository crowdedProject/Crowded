import {YELP_RATING} from '../actions/index';
import {USER_PREFS} from '../actions/index';
import {NEIGBHORHOOD_PREFS} from '../actions/index';

var initState = {
    proximity: true,
    neighborhood: false,
    yelpRating: false,
    seats: false,
    outlets: false,
    bathroomQuality: false,
    line: false,
    noise: false,
    price: false
}
//can change this to state=state;
export default function(state=[initState], action) {
  // debugger;
  //update yelp state status to whatever comes back from the yelp action
  
  //alternative way to write the swtich statements:
//   var type = {};
//   type[USER_PREFS]= {"neighborhood":function(){
      
//   }
// }
//   type[Y]= function(){
//     //...
//   }
  
//   var outer = type[action.type];
//   var inner = outer ? outer[action.payload] : null;
//   inner()


  switch(action.type) {
    case USER_PREFS:
      console.log(state);
      return [action.payload, ...state]
      switch(action.payload) {
        case 'coffeeQuality':
          if (state.coffeeQuality === true) {
            state.coffeeQuality = false;
            return state;
          } else {
            state.coffeeQuality = true;
            return state;
          }
        case 'ambiance':
          if (state.ambiance === true) {
            state.ambiance = false;
            return state;
          } else {
            state.ambiance = true;
            return state;
          }
        case 'yelpRating':
          if (state.yelpRating === true) {
            state.yelpRating = false;
            return state;
          } else {
            state.yelpRating = true;
            return state;
          }
        case 'seats':
          if (state.seats === true) {
            state.seats = false;
            return state;
          } else {
            state.seats = true;
            return state;
          }
        case 'outlets':
          if (state.outlets === true) {
            state.outlets = false;
            return state;
          } else {
            state.outlets = true;
            return state;
          }
        case 'bathroomQuality':
          if (state.bathroomQuality === true) {
            state.bathroomQuality = false;
            return state;
          } else {
            state.bathroomQuality = true;
            return state;
          }
        case 'line':
          if (state.line === true) {
            state.line = false;
            return state;
          } else {
            state.line = true;
            return state;
          }
        case 'noise':
          if (state.noise === true) {
            state.noise = false;
            return state;
          } else {
            state.noise = true;
            return state;
          }
        case 'price':
          if (state.price === true) {
            state.price = false;
            return state;
          } else {
            state.price = true;
            return state;
          }
      }
      //potentially another switch statement here to determine which pref
      // return [action.payload, ...state];
    
    case YELP_RATING:
      return [action.payload.data, ...state];
    }
  return state;
}