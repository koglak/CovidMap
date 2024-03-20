// Actions.js
export const fetchDataRequest = (isoCode) => ({
  type: 'FETCH_DATA_REQUEST',
  payload: isoCode,
});

  export const fetchDataSuccess = data => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  });
  
  export const fetchDataFailure = error => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  });
  