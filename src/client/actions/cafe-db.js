import axios from 'axios';

export const FETCH_SEAT = 'FETCH_SEAT';
export const FETCH_COFFEE = 'FETCH_COFFEE';
export const FETCH_AMBIANCE = 'FETCH_AMBIANCE';
export const FETCH_RATING = 'FETCH_RATING';
export const FETCH_OUTLET = 'FETCH_OUTLET';
export const FETCH_BATHROOM = 'FETCH_BATHROOM';
export const FETCH_LINE = 'FETCH_LINE';
export const FETCH_NOISE = 'FETCH_NOISE';
export const FETCH_PRICE = 'FETCH_PRICE';

export const POST_SEAT = 'POST_SEAT';
export const POST_COFFEE = 'POST_COFFEE';
export const POST_AMBIANCE = 'POST_AMBIANCE';
export const POST_RATING = 'POST_RATING';
export const POST_OUTLET = 'POST_OUTLET';
export const POST_BATHROOM = 'POST_BATHROOM';
export const POST_LINE = 'POST_LINE';
export const POST_NOISE = 'POST_NOISE';
export const POST_PRICE = 'POST_PRICE';


export function fetchSeat(cafeId) {
  const request = axios.post('/seats', {cafeId});
  return {
    type: FETCH_SEAT,
    payload: request
  }
}
export function postSeat(cafe) {
  const request = axios.post('/seats', cafe);
  return {
    type: FETCH_SEAT,
    payload: cafe
  }
}