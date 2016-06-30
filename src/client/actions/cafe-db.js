import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_JOIN = 'FETCH_JOIN';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const ADD_USER = 'ADD_USER';

export function fetchData(cafeId) {
  const request = axios.post('/fetchCafeData', {cafeId});
  return {
    type: FETCH_DATA,
    payload: request
  };
};

export function updateData(props) {
  // let updateReq = {
  //   cafeId,
  //   updateFields //this is an object that is props
  // }
  const request = axios.post('/updateCafeData', props);
  return {
    type: UPDATE_DATA,
    payload: request
  };
};

export function fetchJoin(id) {
  const request = axios.post('/fetchJoin', {id});
  return {
    type: FETCH_JOIN,
    payload: request
  };
};

export function addFavorite(userEmail, cafeId) {
  let updateReq = {
    userEmail,
    cafeId
  }
  const request = axios.post('/addFavorite', updateReq);
  return {
    type: ADD_FAVORITE,
    payload: request
  };
};

export function deleteFavorite(userId, cafeId) {
  let deleteReq = {
    userId,
    cafeId
  }
  const request = axios.post('/deleteFavorite', {cafeId});
  return {
    type: DELETE_FAVORITE,
    payload: request
  };
};

export function addUserData(profile) {
  const request = axios.post('/addUser', profile);
  return {
    type: ADD_USER,
    payload: request
  };
};
