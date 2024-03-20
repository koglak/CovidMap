// reducers.js
const initialState = {
    last_update: '',
    active: 0,
    deaths: 0,
    fatality_rate: 0,
  };
  
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
      default:
        return state;
    }
  };
  
  export default dataReducer;
  