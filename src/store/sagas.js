// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataSuccess, fetchDataFailure } from './actions';

const rapidAPIHost = process.env.REACT_APP_RAPIDAPI_HOST;
const rapidAPIKey = process.env.REACT_APP_RAPIDAPI_KEY;

function* fetchCovidData(action) {
    const iso = action.payload;

    try {
        const response = yield call(axios.get, `https://${rapidAPIHost}/reports`, {
            headers: {
                'x-rapidapi-host': rapidAPIHost,
                'x-rapidapi-key': rapidAPIKey,
            },
            params: { iso },
        });
        console.log(response)
        yield put(fetchDataSuccess(response.data.data[0]));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
}

function* watchFetchCovidData() {
    yield takeLatest('FETCH_DATA_REQUEST', fetchCovidData);
}

export default watchFetchCovidData;
