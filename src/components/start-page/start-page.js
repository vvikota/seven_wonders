import * as React from 'react';
import {connect} from 'react-redux';
import './start-page.css';
import GamerForm from '../gamer-form/gamer-form';
import StartForm from '../start-form/start-form';
import ResultTable from '../result-table/result-table'
import mock from '../mock';

const StartPage = ({isEnterPoints}) => {
  return (
    // <div className="start-wrapper">
    //   { !isEnterPoints ? <StartForm /> : <GamerForm /> }
    // </div>
    <ResultTable />
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isEnterPoints: state.isEnterPoints
});

export default connect(mapStateToProps)(StartPage);