import {ADD_USER} from '../actions/cafe-db';

var initialState = {
  profile: {}
};

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_USER:
      initialState.profile = action.payload.data;
      console.log('this is what we need', {...state, profile: action.payload.data});
      return {...state, profile: action.payload.data};
    default: 
      console.log('this fires', state);
      return state;
  }
}
