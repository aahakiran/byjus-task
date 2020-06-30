/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import makeSelectLoginData from './selectors';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { fetchData, } from './action';
import saga from './saga';
import reducer from './reducer';
import {HomePage} from '../../components/HomePage/index';
import Loader from '../../Loader';

class HomePageCon extends React.PureComponent {
    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        const { boardData:{ isLoginDataFetching, isLoginDataFetched} } = this.props;
        return (
            <div>
                { !isLoginDataFetching && isLoginDataFetched ?
                    <HomePage {...this.props}/>
                     : <div><Loader/></div> 
                } 
            </div>
          );
    } 
}

const mapStateToProps = createStructuredSelector({
  boardData: makeSelectLoginData(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchData: datapack => dispatch(fetchData(datapack)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'data', reducer });
const withSaga = injectSaga({ key: 'data', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePageCon);
