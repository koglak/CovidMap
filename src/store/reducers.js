// reducers.js
const initialState = {
  last_update: '',
  total_active: 0,
  total_deaths: 0,
  data: [],
  fatality_rate: 0,
  countryName: '',
  spinner: false,
  isOpen: false,
  error: '',
  tabValue: '1',  
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        last_update: action.payload.last_update,
        total_active: action.payload.total_active,
        total_deaths: action.payload.total_deaths,
        data: action.payload.data,
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
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_TAB_VALUE':   
      return {
        ...state,
        tabValue: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
