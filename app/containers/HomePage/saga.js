/**
 * Gets the repositories of the user from Github
 */
import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA, DATA_FETCHED } from 'containers/HomePage/constants';
import { repoLoadingError } from 'containers/App/actions';

export function* getRepos() {
  const httpArgss = [
    'https://62a41b88-4d58-42bd-90d5-074d3f5e7afb.mock.pstmn.io/board',
  ];
  try {
    const { data: respData } = yield call(axios.get, ...httpArgss);
    console.log('inside SAGA', respData);
    yield put({ type: DATA_FETCHED, data: respData });
  } catch (err) {
    console.log('err', err);
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getTrainingData() {
  yield takeLatest(FETCH_DATA, getRepos);
}
