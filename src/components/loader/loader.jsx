import * as React from "react"
// import { connect } from "react-redux"
import "./loader.css"


const Loader = ({title}) => {
  return (
    <div className="loader-wrapper">
      <h2>{title}</h2>
      <div className="loadingio-spinner-dual-ring-0bf664t2azvh">
        <div className="ldio-pc5roa487">
          <div></div>
          <div><div>
          </div></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
