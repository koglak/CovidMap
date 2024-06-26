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
  
  export const showSpinner = () => ({
    type: 'SHOW_SPINNER',
  });
  
  export const hideSpinner = () => ({
    type: 'HIDE_SPINNER',
  });
  
  export const toggleModal = (isOpen) => ({
    type: 'TOGGLE_MODAL',
    payload: isOpen,
  });
  
  export const setCountryName = (name) => ({
    type: 'SET_COUNTRY_NAME',
    payload: name,
  });
  

  export const setErrorMessage = (error) => ({
    type: 'SET_ERROR_MESSAGE',
    payload: error,
  });

  export const setTabValue = (value) => ({  
    type: 'SET_TAB_VALUE',
    payload: value,
  });
  