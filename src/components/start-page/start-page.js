import * as React from "react"
import { connect } from "react-redux"
import "./start-page.css"
import GamerForm from "../gamer-form/gamer-form"
import StartForm from "../start-form/start-form"
import ResultTable from "../result-table/result-table"
import withProcessDataContainer from "../gamer-form/with-process-data.js"
import Loader from "../loader/loader.jsx"

const GamerFormWrapped = withProcessDataContainer(GamerForm)

const AppScreen = ({ isEnterPoints, isShowResult, isLoading }) => {
  return (
    <div className="app-wrapper">
      {isLoading ? <Loader title={'processing...'}/> :
      isShowResult ? <ResultTable /> :
      isEnterPoints ? <GamerFormWrapped /> : <StartForm />}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isEnterPoints: state.isEnterPoints,
  isShowResult: state.isShowResult,
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(AppScreen)
