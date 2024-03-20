// reducers.js
const initialState = {
  last_update: '',
  active: 0,
  deaths: 0,
  fatality_rate: 0,
  countryName: '',
  spinner: false,
  isOpen: false,
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        last_update: action.payload.last_update,
        active: action.payload.active,
        deaths: action.payload.deaths,
        fatality_rate: action.payload.fatality_rate,
      };
    case 'SHOW_SPINNER':
      return {
        ...state,
        spinner: true,
      };
    case 'HIDE_SPINNER':
      return {
        ...state,
        spinner: false,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isOpen: action.payload,
      };
    case 'SET_COUNTRY_NAME':
      return {
        ...state,
        countryName: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
