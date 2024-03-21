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
        const responseData = response.data.data;
        const data = responseData.map((item,index) => ({
            id: index,
            date: item.date,
            last_update: item.last_update,
            active: item.active,
            deaths: item.deaths,
            province: item.region.province || 'Mainland',
            active: item.active,
            confirmed: item.confirmed,
          }));

        const total_deaths = responseData.reduce((acc, cur) => acc + cur.deaths, 0);
        const total_active = responseData.reduce((acc, cur) => acc + cur.active, 0);
        const last_update = responseData[0].last_update;
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
