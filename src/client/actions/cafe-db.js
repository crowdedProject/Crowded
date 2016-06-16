import axios from 'axios';

//db call function get/post requests from the server

export const SEAT_DB = 'SEAT_DB';

export function seatsAvailable() {
  //if no params, should get request db for greatest number of seats,
  //if neighborhood or proximity, should bound call by neighborhood?
  
  return {
    type: SEAT_DB,
    payload: ''
  }
}