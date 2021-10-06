import * as React from "react"
import { CamelCaseRefactor } from "../../../common/camelCaseRefactor"
import "./gamer-form-input.css"

const GamerFormInput = (props) => {
  const { item, itemValue, handleChange } = props
  return (
    <label className="default-input-label">
      {CamelCaseRefactor(item)}
      <input
        type="text"
        name={item}
        value={itemValue}
        onChange={handleChange}
        className="default-input"
      />
      <span className="input-error">
        The field cannot be empty
      </span>
    </label>
  )
}

export default GamerFormInput
