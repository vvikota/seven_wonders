import * as React from "react"
import "./gamer-form.css"
import GamerFormInput from "./gamer-form-input/gamer-form-input"
import { defaultCityList } from "../../common/Templates"
import GamerFormSelect from "./gamer-form-select/gamer-form-select"

const GamerForm = (props) => {
  const { fields, handleChange, processUserData } = props

  return (
    <div className="form-wrapper center-wrapper">
      <h2 className="form-title"> Gamer </h2>
      <div className="form-inputs">
        {Object.keys(fields).map((item, index) => {
          let itemValue = fields[item]

          return item === "city" ? (
            <GamerFormSelect
              key={index}
              itemName={item}
              options={defaultCityList}
              itemValue={itemValue}
              handleChange={handleChange}
              defaultValue={fields.city}
            />
          ) : (
            <GamerFormInput
              key={index}
              item={item}
              itemValue={itemValue}
              handleChange={handleChange}
            />
          )
        })}
      </div>

      <button onClick={() => processUserData()}>Сохранить</button>
    </div>
  )
}

export default GamerForm
