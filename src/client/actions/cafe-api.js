import axios from 'axios';

export const FETCH_CAFELIST = 'FETCH_CAFELIST';

export function fetchCafeListByGeoloc(data) {
  const request = axios.post('/cafeResult', {data})
    .then(res => {
      return axios.post('/cafeDatabase', res)
    });
    
  console.log(request);
  return {
    type: FETCH_CAFELIST,
    payload: request
  }
};

