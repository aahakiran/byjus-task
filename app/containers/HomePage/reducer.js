/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { DATA_FETCHED, FETCH_DATA } from './constants';
import initialJSState from './initialState';

const initialState = fromJS(initialJSState);

function Reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return state
        .set('isLoginDataFetching', true)
        .set('isLoginDataFetched', false);
    case DATA_FETCHED:
      return state
        .set('data', action.data)
        .set('isLoginDataFetching', false)
        .set('isLoginDataFetched', true);
    default:
      return state;
  }
}

export default Reducer;
