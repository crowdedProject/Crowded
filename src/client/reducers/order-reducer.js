import {ORDER_CAFELIST} from '../actions/index';

var initState = {
  orderedBy: 'rating'
}

export default function(state=initState, action) {
  if (action.type === ORDER_CAFELIST) {
    return {...state, orderedBy: action.payload};
  }
  return state;
}