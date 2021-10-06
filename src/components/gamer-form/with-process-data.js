import * as React from "react"
import { useState } from "react"
import {setUser, showResult, startEnterPoints, toggleLoader} from "../../redux/actions"
import { connect } from "react-redux"
import "./gamer-form.css"
import {compose} from "recompose";
import { StandartTemplate} from "../../common/Templates"

const withProcessData = (Component) => {
  const WithProcessData = (props) => {
    const { setUser, gamers, gamersCount, showResult, startEnterPoints, toggleLoader } = props
    const [fields, setFieldValue] = useState(StandartTemplate)
  
    const handleChange = (event) => {
      const { name, value } = event.target
  
      if (name === "name" || name === "city" || value.match(/^\d{0,}$/)) {
        setFieldValue((prevState) => ({ ...prevState, [name]: value }))
      }
    }

    const processUserData = () => {
      toggleLoader()

      const timer = setTimeout(() => {
        toggleLoader();
        clearTimeout(timer)
      }, 500)

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
    dispatch(setUser(userData))
  },

  showResult: (value) => {
    dispatch(showResult(value))
  },

  startEnterPoints: (value) => {
    dispatch(startEnterPoints(value))
  },

  toggleLoader: () => {
    dispatch(toggleLoader())
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProcessData
)
