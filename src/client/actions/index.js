import axios from 'axios';
import FETCH_CAFELIST from './cafe-api';
import SEAT_DB from './cafe-db';
import FETCH_DATA from './cafe-db';
import DELETE_FAVORITE from './cafe-db';

export const USER_PREFS = 'USER_PREFS';
export const SUBMIT_PREFS = 'SUBMIT_PREFS';
export const NEIGHBORHOOD_PREFS = 'NEIGBHORHOOD_PREFS';
export const FETCH_COORD = 'FETCH_COORD';

export function setPreferences(pref) {
  return {
    type: USER_PREFS,
    payload: pref
  }
};

export function setNeighborhood(neighborhood) {
  return {
    type: NEIGHBORHOOD_PREFS,
    payload: neighborhood
  }
};

export function fetchCoordinates(position) {
  console.log('event fired', position)
  return {
    type: FETCH_COORD,
    payload: position
  }
};

export function submitPrefList(preferences) {
  let googleCafeList = FETCH_CAFELIST;
  let seats = SEAT_DB;
  
  return {
    type: SUBMIT_PREFS,
    payload: '' //googlePlace + db (but whatever was submitted as a pref)
  }
};
