import {ADD_USER} from '../actions/cafe-db';

var initState = {
  idToken: '',
  profile: {}
};

export default function(state=initState, action) {
  switch (action.type) {
    case ADD_USER:
      console.log('this is action payload', action.payload);
      return {...state, idToken: action.payload.data};
  }
  return state;
}
