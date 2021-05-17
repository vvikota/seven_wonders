import * as React from 'react';
import {connect} from 'react-redux';
import './start-page.css';
import GamerForm from '../gamer-form/gamer-form';
import StartForm from '../start-form/start-form';
import ResultTable from '../result-table/result-table'

const StartPage = ({isEnterPoints, isShowResult}) => {
  return (
    <div className="start-wrapper">
      {
        isShowResult ? <ResultTable /> :
        isEnterPoints ?  <GamerForm /> : <StartForm /> 
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isEnterPoints: state.isEnterPoints,
  isShowResult: state.isShowResult
});

export default connect(mapStateToProps)(StartPage);