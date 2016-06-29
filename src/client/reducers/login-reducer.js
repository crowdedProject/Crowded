import {ADD_USER} from '../actions/cafe-db';

var initialState = {
  profile: {}
};

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_USER:
      initialState.profile = action.payload.data;
      return {...state, profile: action.payload.data};
    default: 
      return state;
  }
}
