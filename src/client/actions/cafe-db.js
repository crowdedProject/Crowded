import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_COFFEE = 'FETCH_COFFEE';
export const FETCH_AMBIANCE = 'FETCH_AMBIANCE';
export const FETCH_RATING = 'FETCH_RATING';
export const FETCH_OUTLET = 'FETCH_OUTLET';
export const FETCH_BATHROOM = 'FETCH_BATHROOM';
export const FETCH_LINE = 'FETCH_LINE';
export const FETCH_NOISE = 'FETCH_NOISE';
export const FETCH_PRICE = 'FETCH_PRICE';

export const UPDATE_SEAT = 'UPDATE_SEAT';
export const UPDATE_COFFEE = 'UPDATE_COFFEE';
export const UPDATE_AMBIANCE = 'UPDATE_AMBIANCE';
export const UPDATE_RATING = 'UPDATE_RATING';
export const UPDATE_OUTLET = 'UPDATE_OUTLET';
export const UPDATE_BATHROOM = 'UPDATE_BATHROOM';
export const UPDATE_LINE = 'UPDATE_LINE';
export const POST_NOISE = 'POST_NOISE';
export const POST_PRICE = 'POST_PRICE';


export function fetchData(cafeId, field, value) {
  const request = axios.post('/fetchCafeData', {cafeId});
  return {
    type: FETCH_DATA,
    payload: request
  }
}
export function updateData(cafeId, field, value) {
  let updateReq = {
    cafeId,
    field,
    value,
  }
  const request = axios.post('/updateCafeData', updateReq);
  return {
    type: UPDATE_DATA,
    payload: request
  }
}