import * as React from "react"
import { CamelCaseRefactor } from "../../../common/camelCaseRefactor"

const GamerFormSelect = (props) => {
  const { itemName, options, itemValue, handleChange, defaultValue } = props

  return (
    <label>
      {CamelCaseRefactor(itemName)}
      <select onChange={handleChange} value={itemValue} name={itemName}>
        <option disabled value={defaultValue}>
          {defaultValue}
        </option>
        {options.map(
          (item, index) =>
            itemValue !== item && (
              <option key={index} value={item}>
                {item}
              </option>
            )
        )}
      </select>
    </label>
  )
}

export default GamerFormSelect