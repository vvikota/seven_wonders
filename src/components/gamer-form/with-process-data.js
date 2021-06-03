import * as React from "react"
import { useState } from "react"
import { ActionCreator } from "../../redux/reducer"
import { connect } from "react-redux"
import "./gamer-form.css"
import {compose} from "recompose";
import { StandartTemplate} from "../../common/Templates"

const withProcessData = (Component) => {
  const WithProcessData = (props) => {
    const { setUser, gamers, gamersCount, showResult, startEnterPoints } = props
    const [fields, setFieldValue] = useState(StandartTemplate)
  
    const handleChange = (event) => {
      const { name, value } = event.target
  
      if (name === "name" || name === "city" || value.match(/^\d{0,}$/)) {
        setFieldValue((prevState) => ({ ...prevState, [name]: value }))
      }
    }
  
    const processUserData = () => {
      let resultKeys = Object.keys(fields).filter(
        (item) => (item !== "name") & (item !== "city")
      )

      fields.resultPoints = resultKeys.reduce((accumulator, item) => {
        return accumulator + +fields[item]
      }, 0)

      setUser(fields)
  
      setFieldValue(StandartTemplate)
  
      if (gamers.length === +gamersCount) {
        showResult(true)
        startEnterPoints(false)
      }
    }
  
    return (<Component
              {...props}
              handleChange={handleChange}
              processUserData={processUserData}
              fields={fields}
            />
    )
  }

  return WithProcessData
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  gamers: state.gamers,
  gamersCount: state.gamersCount,
})

const mapDispatchToProps = (dispatch) => ({
  setUser: (userData) => {
    dispatch(ActionCreator.setUser(userData))
  },

  showResult: (value) => {
    dispatch(ActionCreator.showResult(value))
  },

  startEnterPoints: (value) => {
    dispatch(ActionCreator.startEnterPoints(value))
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProcessData
)
