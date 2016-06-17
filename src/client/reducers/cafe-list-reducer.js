import {FETCH_CAFELIST} from '../actions/cafe-api';
import {USER_PREFS} from '../actions/index';
import {NEIGHBORHOOD_PREFS} from '../actions/index';

// let initState = {
//   cafes: []
// }
//   prefList: 
//     { 
//       proximity: false,
//       neighborhood: true,
//       coffeeQuality: false,
//       ambiance: false,
//       yelpRating: false,
//       seats: false,
//       outlets: false,
//       bathroomQuality: false,
//       line: false,
//       noise: false,
//       price: false
//     },
//   neighborhoodPref: 
//   {
//     mission: false,
//     castro: false,
//     sunset: false,
//     richmond: false,
//     marina: false,
//     northBeach: false,
//     haight: false,
//     soma: false,
//     twinPeaks: false
//   },
//   cafeList: {}
// };

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_CAFELIST:
      return [action.payload.data, ...state];
      // return [action.payload.data, ...state];
  }
  return state;
}


// export default function(state=initState, action) {
//   switch(action.type) {
//     case USER_PREFS:
//       console.log(state);
//       switch(action.payload) {
//         case 'coffeeQuality':
//           if (state.prefList.coffeeQuality === true) {
//             state.prefList.coffeeQuality = false;
//             return state;
//           } else {
//             state.prefList.coffeeQuality = true;
//             return state;
//           }
//         case 'ambiance':
//           if (state.prefList.ambiance === true) {
//             state.prefList.ambiance = false;
//             return state;
//           } else {
//             state.prefList.ambiance = true;
//             return state;
//           }
//         case 'yelpRating':
//           if (state.prefList.yelpRating === true) {
//             state.prefList.yelpRating = false;
//             return state;
//           } else {
//             state.prefList.yelpRating = true;
//             return state;
//           }
//         case 'seats':
//           if (state.prefList.seats === true) {
//             state.prefList.seats = false;
//             return state;
//           } else {
//             state.prefList.seats = true;
//             return state;
//           }
//         case 'outlets':
//           if (state.prefList.outlets === true) {
//             state.prefList.outlets = false;
//             return state;
//           } else {
//             state.prefList.outlets = true;
//             return state;
//           }
//         case 'bathroomQuality':
//           if (state.prefList.bathroomQuality === true) {
//             state.prefList.bathroomQuality = false;
//             return state;
//           } else {
//             state.prefList.bathroomQuality = true;
//             return state;
//           }
//         case 'line':
//           if (state.prefList.line === true) {
//             state.prefList.line = false;
//             return state;
//           } else {
//             state.prefList.line = true;
//             return state;
//           }
//         case 'noise':
//           if (state.prefList.noise === true) {
//             state.prefList.noise = false;
//             return state;
//           } else {
//             state.prefList.noise = true;
//             return state;
//           }
//         case 'price':
//           if (state.prefList.price === true) {
//             state.prefList.price = false;
//             return state;
//           } else {
//             state.prefList.price = true;
//             return state;
//           }
//       }
//       case NEIGHBORHOOD_PREFS:
//         console.log(state);
//         switch(action.payload) {
//           case 'mission':
//             if (state.neighborhoodPref.mission === true) {
//               state.neighborhoodPref.mission = false;
//               return state;
//             } else {
//               state.neighborhoodPref.mission = true;
//               return state;
//             }
//           case 'castro':
//             if (state.neighborhoodPref.castro === true) {
//               state.neighborhoodPref.castro = false;
//               return state;
//             } else {
//               state.neighborhoodPref.castro = true;
//               return state;
//             }
//           case 'sunset':
//             if (state.neighborhoodPref.sunset === true) {
//               state.neighborhoodPref.sunset = false;
//               return state;
//             } else {
//               state.neighborhoodPref.sunset = true;
//               return state;
//             }
//           case 'richmond':
//             if (state.neighborhoodPref.richmond === true) {
//               state.neighborhoodPref.richmond = false;
//               return state;
//             } else {
//               state.neighborhoodPref.richmond = true;
//               return state;
//             }
//           case 'marina':
//             if (state.neighborhoodPref.marina === true) {
//               state.neighborhoodPref.marina = false;
//               return state;
//             } else {
//               state.neighborhoodPref.marina = true;
//               return state;
//             }
//           case 'northBeach':
//             if (state.neighborhoodPref.northBeach === true) {
//               state.neighborhoodPref.northBeach = false;
//               return state;
//             } else {
//               state.neighborhoodPref.northBeach = true;
//               return state;
//             }
//           case 'haight':
//             if (state.neighborhoodPref.haight === true) {
//               state.neighborhoodPref.haight = false;
//               return state;
//             } else {
//               state.neighborhoodPref.haight = true;
//               return state;
//             }
//           case 'soma':
//             if (state.neighborhoodPref.soma === true) {
//               state.neighborhoodPref.soma = false;
//               return state;
//             } else {
//               state.neighborhoodPref.soma = true;
//               return state;
//             }
//           case 'twinPeaks':
//             if (state.neighborhoodPref.twinPeaks === true) {
//               state.twinPeaks = false;
//               return state;
//             } else {
//               state.neighborhoodPref.twinPeaks = true;
//               return state;
//             }
//         } 
              
//       case YELP_RATING:
//         let prefGiven = false;
//         for (let key in state.prefList) {
//           if (state.prefList[key] === true) {
//             prefGiven = true;
//           }
//         }
//         if (prefGiven === true) {
//           //don't filter results yet for the cafes, will filter based on prefs
//           action.payload.data.forEach((cafe) => {
//             state.cafeList[cafe].name = [cafe.name, cafe.rating, cafe.location];
//           });
//           return state;
//         } else {
//           //only set state to first 5 cafes (update logic if not sorted already by highest star rating)
//           for (let i=0; i<5; i++) {
//             state.cafeList[action.payload.data[i].name] = [action.payload.data[i].name, action.payload.data[i].rating, action.payload.data[i].location];
//           }
//           return state;
//         }
//       }
//   return state;
// };
