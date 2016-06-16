import axios from 'axios';
import YELP_RATING from './cafe-api';
import SEAT_DB from './cafe-db';

export const USER_PREFS = 'USER_PREFS';
export const SUBMIT_PREFS = 'SUBMIT_PREFS';

export function setPreferences(pref) {
  //should be logic here if a pref exists, it should not be added again
  //instead it should be removed and color should change back to normal color
  return {
    type: USER_PREFS,
    payload: pref
  }
};

export function submitPrefList(preferences) {
  let yelp = YELP_RATING;
  let seats = SEAT_DB;
  
  return {
    type: SUBMIT_PREFS,
    payload: '' //yelp + db (but whatever was submitted as a pref)
  }
};
