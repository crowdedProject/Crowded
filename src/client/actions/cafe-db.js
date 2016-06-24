import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export function fetchData(cafeId) {
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
    value
  }
  const request = axios.post('/updateCafeData', updateReq);
  return {
    type: UPDATE_DATA,
    payload: request
  }
}

export function deleteFavorite(userId, cafeId) {
  let deleteReq = {
    userId,
    cafeId
  }
  const request = axios.post('/deleteFavorite', {cafeId});
  return {
    type: DELETE_FAVORITE,
    payload: request
  }
}