/**
 * EBHomepage selectors
 */


import { createSelector } from 'reselect';
import initialJSState from './initialState';

const selectHome = state => state.data || initialJSState;

const makeSelectLoginData = () =>
  createSelector(
    selectHome,
    ebHomeState => ebHomeState.toJS(),
  );

export default makeSelectLoginData;
export { selectHome };
