// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataSuccess, fetchDataFailure, showSpinner, hideSpinner, setErrorMessage } from './actions';

const rapidAPIHost = process.env.REACT_APP_RAPIDAPI_HOST;
const rapidAPIKey = process.env.REACT_APP_RAPIDAPI_KEY;

function* fetchCovidData(action) {
    const iso = action.payload;
    yield put(showSpinner()); 
    try {
        const response = yield call(axios.get, `https://${rapidAPIHost}/reports`, {
            headers: {
                'x-rapidapi-host': rapidAPIHost,
                'x-rapidapi-key': rapidAPIKey,
            },
            params: { iso },
        });
        const data = response.data.data;
        const total_deaths = data.reduce((acc, cur) => acc + cur.deaths, 0);
        const total_active = data.reduce((acc, cur) => acc + cur.active, 0);
        const last_update = data[0].last_update;
        yield put(fetchDataSuccess({ last_update, total_active, total_deaths, data }));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
        yield put(setErrorMessage("Something went wrong... Please try again later!"));
    } finally {
        yield put(hideSpinner()); 
    }
}

function* watchFetchCovidData() {
    yield takeLatest('FETCH_DATA_REQUEST', fetchCovidData);
}

export default watchFetchCovidData;
