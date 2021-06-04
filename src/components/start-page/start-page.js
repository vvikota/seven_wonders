import * as React from "react"
import { connect } from "react-redux"
import "./start-page.css"
import GamerForm from "../gamer-form/gamer-form"
import StartForm from "../start-form/start-form"
import ResultTable from "../result-table/result-table"
import withProcessDataContainer from "../gamer-form/with-process-data.js"

const GamerFormWrapped = withProcessDataContainer(GamerForm)

const StartPage = ({ isEnterPoints, isShowResult }) => {
  return (
    <>
      {isShowResult ? (
        <ResultTable />
      ) : isEnterPoints ? (
        <GamerFormWrapped />
      ) : (
        <div className="start-wrapper center-wrapper main-layer">
          <StartForm />
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isEnterPoints: state.isEnterPoints,
  isShowResult: state.isShowResult,
})

export default connect(mapStateToProps)(StartPage)
