import * as React from 'react';

const GamerFormInput = (props) => {  
  const { item, itemValue, handleChange } = props;
  return  <label>
            {item}
            <input 
              type="text"
              name={item}
              value={itemValue}
              onChange={handleChange} 
            />
          </label> 
}

export default GamerFormInput;