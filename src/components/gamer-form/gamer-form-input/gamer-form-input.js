import * as React from "react"
import { CamelCaseRefactor } from "../../../common/camelCaseRefactor"

const GamerFormInput = (props) => {
  const { item, itemValue, handleChange } = props
  return (
    <label>
      {CamelCaseRefactor(item)}
      <input
        type="text"
        name={item}
        value={itemValue}
        onChange={handleChange}
      />
    </label>
  )
}

export default GamerFormInput
